import React from 'react';

import Comparator from './components/Comparator';
import Logo from './components/Logo';

const App = (): React.JSX.Element => (
  <>
    <header className="container px-2 pt-12 mx-auto md:px-10">
      <a
        aria-label="Antistatique logo"
        className="text-magenta"
        href="https://antistatique.net/"
        target="_blank"
        rel="noreferrer"
      >
        <Logo />
      </a>
    </header>

    <main className="mt-20">
      <div className="container px-2 mx-auto md:px-10">
        <h1 className="font-serif text-3xl text-left md:text-6xl mb-7">Images</h1>

        <div className="w-full mt-12 text-left lg:w-5/12">
          <p className="text-xl md:text-2xl">
            A small tool to help you make the right decision when{' '}
            <b>choosing image format, size and quality</b> (compression ratio).
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Comparator />
      </div>

      <div className="container px-2 mx-auto md:px-10">
        <div className="md:w-1/2">
          <h2 className="mt-12 font-serif text-2xl font-bold md:text-3xl md:mb-5 md:mt-14">
            How to use it?
          </h2>
          <p className="mt-4 text-lg text-sensei md:text-xl md:mb-5">
            First, choose the wrapper <b>resolution</b>. It should be the size
            used to display your image on your website. Then, try different
            options to see which is the best for this case.
          </p>

          <p className="mt-4 text-lg text-sensei md:text-xl">
            Here are the <b>criteria</b> to keep in mind to make a choice:
          </p>

          <ul className="px-6 mt-2 text-lg list-disc text-sensei md:text-xl">
            <li>
              <b>Weight</b> should be as low as possible
            </li>
            <li>
              The image should be as <b>visually pleasing</b> as possible on any
              kind of screen
            </li>
          </ul>

          <h2 className="mt-12 font-serif text-2xl font-bold md:text-3xl md:mb-5 md:mt-14">
            How to generate images?
          </h2>
          <p className="mt-4 text-lg text-sensei md:text-xl md:mb-5">
            There are a lot of software options, but the easiest way to do it,
            is to use{' '}
            <a
              href="https://imagemagick.org/index.php"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-minuit transition-colors"
            >
              ImageMagick
            </a>
            .
          </p>
          <p className="mt-4 text-lg text-sensei md:text-xl">For example:</p>
          <div className="max-w-full overflow-x-auto">
            <pre>{`
# One by one            
$ magick original.jpeg \\
  -resize 2400x1600 \\
  -format avif \\
  -quality 30 \\
  30@2x.avif

# By batch, in a directory
for file in *.jpg; do
    name="\${file%.*}"

    for width in 480 768 1024 1600 2400; do
        magick "$file" \\
            -quality 45 \\
            -resize "\${width}x" \\
            "\${name}-\${width}w.avif"
    done
done
            `}</pre>
          </div>

          <p className="mt-4 text-lg text-sensei md:text-xl">
            Here a simple, but powerfull,{' '}
            <a
              className="underline hover:text-minuit transition-colors"
              href="https://gist.github.com/Yago/d49151559176418db9ccb1814e72b28e"
              target="_blank"
              rel="noreferrer"
            >
              image generation script
            </a>
            .
          </p>

          <h2 className="mt-12 font-serif text-2xl font-bold md:text-3xl md:mb-5 md:mt-14">
            Any advice?
          </h2>

          <p className="mt-4 text-lg text-sensei md:text-xl">
            Use only modern image formats like <b>AVIF</b> or <b>WebP</b>, no need to bother with JPEG anymore regarding browser support:
          </p>
          <ul className="px-6 mt-2 text-lg list-disc text-sensei md:text-xl">
            <li>
              <a
                href="https://caniuse.com/webp"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-minuit transition-colors"
              >
                WebP
              </a>
            </li>
            <li>
              <a
                href="https://caniuse.com/avif"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-minuit transition-colors"
              >
                AVIF
              </a>
            </li>
          </ul>

          <p className="mt-4 text-lg text-sensei md:text-xl">
            Provide a single dithered effect image for all old browsers. It could be done with ImageMagick like:
          </p>
          <div className="max-w-full overflow-x-auto">
            <pre>{`
$ magick original.jpeg -scale 640 -colorspace Gray -ordered-dither h4x4o -colorspace sRGB -opaque black dither.png
            `}</pre>
          </div>

          <p className="mt-4 text-lg text-sensei md:text-xl">
            Then, you should have something like:
          </p>

          <div className="max-w-full overflow-x-auto">
            <pre>{`
<picture >
  <source
    type="image/avif"
    srcset="my-image_480.avif 480w, my-image_768.avif 768w, my-image_1024.avif 1024w, my-image_1600.avif 1600w, my-image_2400.avif 2400w"
    sizes="(min-width: 1280px) 750px, 85vw"
  />
  <img
    alt="image description"
    src="my-image_dither.png"
    sizes="(min-width: 1280px) 750px, 85vw"
    loading="lazy"
    fetchpriority="auto"
  />
</picture>
            `}</pre>
          </div>
        </div>
      </div>
    </main>

    <footer className="relative mt-12 text-white bg-balsamique">
      <div className="container px-2 py-12 mx-auto md:px-10">
        <p className="text-center text-balsamique-light">
          Made with ❤️ by{' '}
          <a
            href="https://antistatique.net/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Antistatique
          </a>
        </p>
      </div>
    </footer>
  </>
);

export default App;
