/** @jsxImportSource @emotion/react */
import React from 'react';
import tw from 'twin.macro';

import Comparator from './components/Comparator';
import Logo from './components/Logo';

const App = (): JSX.Element => (
  <>
    <header tw="container px-2 pt-12 mx-auto md:px-10">
      <a
        aria-label="Antistatique logo"
        tw="text-magenta"
        href="https://antistatique.net/"
        target="_blank"
        rel="noreferrer"
      >
        <Logo />
      </a>
    </header>

    <main tw="mt-20">
      <div tw="container px-2 mx-auto md:px-10">
        <h1 tw="font-serif text-3xl text-left md:text-6xl mb-7">Images</h1>

        <div tw="w-full mt-12 text-left lg:w-5/12">
          <p tw="text-xl md:text-2xl">
            A small tool to help you make the right decision when{' '}
            <b>choosing image format, size and quality</b> (compression ratio).
          </p>
        </div>
      </div>

      <div tw="mt-12">
        <Comparator />
      </div>

      <div tw="container px-2 mx-auto md:px-10">
        <div tw="md:w-1/2">
          <h2 tw="mt-12 font-serif text-2xl font-bold md:text-3xl md:mb-5 md:mt-14">
            How to use it?
          </h2>
          <p tw="mt-4 text-lg text-sensei md:text-xl md:mb-5">
            First, choose the wrapper <b>resolution</b>. It should be the size
            used to display your image on your website. Then, try different
            options to see which is the best for this case.
          </p>

          <p tw="mt-4 text-lg text-sensei md:text-xl">
            Here are the <b>criteria</b> to keep in mind to make a choice:
          </p>

          <ul tw="px-6 mt-2 text-lg list-disc text-sensei md:text-xl">
            <li>
              <b>Weight</b> should be as low as possible
            </li>
            <li>
              The image should be as <b>visually pleasing</b> as possible on any
              kind of screen
            </li>
          </ul>

          <h2 tw="mt-12 font-serif text-2xl font-bold md:text-3xl md:mb-5 md:mt-14">
            How to generate images?
          </h2>
          <p tw="mt-4 text-lg text-sensei md:text-xl md:mb-5">
            There are a lot of software options, but the easiest way to do it,
            is to use{' '}
            <a
              href="https://imagemagick.org/index.php"
              target="_blank"
              rel="noreferrer"
              tw="underline hover:text-minuit transition-colors"
            >
              ImageMagick
            </a>
            .
          </p>
          <p tw="mt-4 text-lg text-sensei md:text-xl">For example:</p>
          <div tw="max-w-full overflow-x-auto">
            <pre>{`
# One by one            
$ magick original.jpeg \\
  -resize 2400x1600 \\
  -format webp \\
  -quality 30 \\
  30@2x.webp

# By batch, in a directory
$ mogrify \\
  -format webp \\
  -quality 30 \\
  -resize 2400x1600 \\
  *.jpeg
            `}</pre>
          </div>

          <p tw="mt-4 text-lg text-sensei md:text-xl">
            Here a simple, but powerfull,{' '}
            <a
              tw="underline hover:text-minuit transition-colors"
              href="https://gist.github.com/Yago/d49151559176418db9ccb1814e72b28e"
              target="_blank"
              rel="noreferrer"
            >
              image generation script
            </a>
            .
          </p>

          <h2 tw="mt-12 font-serif text-2xl font-bold md:text-3xl md:mb-5 md:mt-14">
            Any advice?
          </h2>

          <p tw="mt-4 text-lg text-sensei md:text-xl">
            Use modern image formats like <b>AVIF</b> or <b>WebP</b> for modern
            display at <b>2x</b> with a heavy compression and <b>JPEG</b> for
            old display/browser at <b>1x</b> with medium compression.
          </p>

          <p tw="mt-4 text-lg text-sensei md:text-xl">
            You should have something like:
          </p>

          <div tw="max-w-full overflow-x-auto">
            <pre>{`
<picture>
  <source srcSet="my-image@2x.avif" type="image/avif" />
  <source srcSet="my-image@2x.webp" type="image/webp" />
  <source srcSet="my-image@1x.jpeg" type="image/jpeg" />
  <img src="my-image@1x.jpeg" />
</picture>
            `}</pre>
          </div>

          <h2 tw="mt-12 font-serif text-2xl font-bold md:text-3xl md:mb-5 md:mt-14">
            What about browser support?
          </h2>
          <p tw="mt-4 text-lg text-sensei md:text-xl md:mb-5">
            It’s obvious that modern formats are not supported by every browser.
            Take a look for yourself, based on your audience:
          </p>
          <ul tw="px-6 mt-2 text-lg list-disc text-sensei md:text-xl">
            <li>
              <a
                href="https://caniuse.com/webp"
                target="_blank"
                rel="noreferrer"
                tw="underline hover:text-minuit transition-colors"
              >
                WebP
              </a>
            </li>
            <li>
              <a
                href="https://caniuse.com/avif"
                target="_blank"
                rel="noreferrer"
                tw="underline hover:text-minuit transition-colors"
              >
                AVIF
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>

    <footer tw="relative mt-12 text-white bg-balsamique">
      <div tw="container px-2 py-12 mx-auto md:px-10">
        <p tw="text-center text-balsamique-light">
          Made with ❤️ by{' '}
          <a
            href="https://antistatique.net/"
            target="_blank"
            rel="noreferrer"
            tw="underline hover:text-white transition-colors"
          >
            Antistatique
          </a>
        </p>
      </div>
    </footer>
  </>
);

export default App;
