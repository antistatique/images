/** @jsxImportSource @emotion/react */
import React from 'react';
import tw from 'twin.macro';

import Logo from './components/Logo';

const App = (): JSX.Element => (
  <>
    <div tw="container px-2 py-12 mx-auto md:px-10">
      <header>
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
        <h1 tw="font-serif text-3xl text-left md:text-6xl mb-7">Images</h1>

        <div tw="w-full mt-12 text-left lg:w-5/12">
          <p tw="text-xl md:text-2xl">
            A small tool to help you make the right decision when{' '}
            <b>choosing image format, size and quality</b> (compression rate).
          </p>
        </div>
      </main>
    </div>

    <footer tw="relative text-white bg-balsamique">
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
