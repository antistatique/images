import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

import type { Image } from '../src/types/image';

const FORMATS = ['jpeg', 'webp', 'avif'] as const;
const QUALITIES = [100, 85, 65, 50, 40, 30, 20] as const;
const SIZES = {
  '@1x': [1200, 800],
  '@2x': [2400, 1600],
} as const;

const projectRoot = join(import.meta.dir, '..');
const source = join(projectRoot, 'public/images/original.jpeg');
const outputDir = join(projectRoot, 'public/images');
const manifestPath = join(projectRoot, 'src/images.json');

function runMagick(args: string[]): void {
  const result = Bun.spawnSync(['magick', ...args]);
  if (result.exitCode !== 0) {
    throw new Error(
      `magick ${args.join(' ')} failed:\n${result.stderr.toString()}`
    );
  }
}

function identifyDimensions(path: string): { width: number; height: number } {
  const result = Bun.spawnSync([
    'magick',
    'identify',
    '-format',
    '%w %h',
    path,
  ]);
  if (result.exitCode !== 0) {
    throw new Error(
      `magick identify failed for ${path}:\n${result.stderr.toString()}`
    );
  }
  const [width, height] = result.stdout
    .toString()
    .trim()
    .split(' ')
    .map(Number);
  return { width, height };
}

function formatWeight(bytes: number): string {
  return `${Math.round(bytes / 1000)}Ko`;
}

function publicPath(filename: string): string {
  return `./images/${filename}`;
}

function convertDither(): Image {
  const filename = 'dither.png';
  const output = join(outputDir, filename);

  runMagick([
    source,
    '-scale',
    '640',
    '-colorspace',
    'Gray',
    '-ordered-dither',
    'h4x4o',
    '-colorspace',
    'sRGB',
    '-opaque',
    'black',
    output,
  ]);

  const stats = Bun.file(output);
  const dimensions = identifyDimensions(output);

  return {
    id: 'dither',
    format: 'png',
    weight: formatWeight(stats.size),
    quality: 'dither',
    ...dimensions,
    filename,
    path: publicPath(filename),
  };
}

function convertVariant(
  format: (typeof FORMATS)[number],
  quality: number,
  sizeKey: keyof typeof SIZES,
  [width, height]: readonly [number, number]
): Image {
  const filename = `${quality}${sizeKey}.${format}`;
  const output = join(outputDir, filename);

  runMagick([
    source,
    '-resize',
    `${width}x${height}`,
    '-quality',
    String(quality),
    output,
  ]);

  const stats = Bun.file(output);
  return {
    id: `${format}-${quality}${sizeKey}`,
    format,
    weight: formatWeight(stats.size),
    quality: String(quality),
    width,
    height,
    filename,
    path: publicPath(filename),
  };
}

await mkdir(outputDir, { recursive: true });

const originalStats = Bun.file(source);
const originalDimensions = identifyDimensions(source);

const images: Record<string, Image> = {
  original: {
    id: 'original',
    format: 'jpeg',
    weight: formatWeight(originalStats.size),
    quality: '100',
    ...originalDimensions,
    filename: 'original.jpeg',
    path: publicPath('original.jpeg'),
  },
};

images.dither = convertDither();

for (const format of FORMATS) {
  for (const quality of QUALITIES) {
    for (const [sizeKey, dimensions] of Object.entries(SIZES) as Array<
      [keyof typeof SIZES, (typeof SIZES)[keyof typeof SIZES]]
    >) {
      const image = convertVariant(format, quality, sizeKey, dimensions);
      images[image.id] = image;
    }
  }
}

await Bun.write(manifestPath, JSON.stringify(images));

console.log(`Wrote ${Object.keys(images).length} entries to ${manifestPath}`);
