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
            <b>choosing image format, size and quality</b> (compression rate).
          </p>
        </div>
      </div>

      <div tw="mt-12">
        <Comparator />
      </div>

      <div tw="container px-2 mx-auto md:px-10">
        <div tw="md:w-1/2">
          <h2 tw="mt-12 mb-4 font-serif text-2xl font-bold md:text-3xl md:mb-5 md:mt-14">
            How to use it
          </h2>
          <p tw="mb-4 text-lg text-sensei md:text-xl md:mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tubulo
            putas dicere? Non modo carum sibi quemque, verum etiam vehementer
            carum esse? Zenonis est, inquam, hoc Stoici. Hoc est non modo cor
            non habere, sed ne palatum quidem. Ut aliquid scire se gaudeant? Si
            alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat;
          </p>
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
