/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import options from './options.json';

const Selector = ({
  onSelect,
  side,
}: {
  onSelect: (id: number) => void;
  side: string;
}): JSX.Element => (
  <select
    tw="w-1/4 pr-8 truncate rounded text-minuit"
    onChange={e => onSelect(+e.target.value)}
  >
    {options.map((option, key) => (
      <option key={`option-${side}-${key}`} value={key}>
        {option.filename}
      </option>
    ))}
  </select>
);

const Comparator = (): JSX.Element => {
  const [left, setLeft] = useState(options[0]);
  const [right, setRight] = useState(options[1]);
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(800);

  return (
    <div tw="pt-12 text-white bg-minuit">
      <div tw="container px-2 mx-auto md:px-10">
        <h3 tw="font-serif text-lg font-bold md:text-xl">Display size</h3>
        <div tw="flex mt-4 space-x-4">
          <div tw="flex flex-col space-y-2">
            <label htmlFor="width">Width</label>
            <input
              type="number"
              id="width"
              defaultValue={width}
              tw="rounded text-minuit"
              onChange={e => setWidth(+e.target.value)}
            />
          </div>
          <div tw="flex flex-col space-y-2">
            <label htmlFor="width">Height</label>
            <input
              type="number"
              id="width"
              defaultValue={height}
              tw="rounded text-minuit"
              onChange={e => setHeight(+e.target.value)}
            />
          </div>
        </div>
        <p tw="mt-2 lg:w-1/3">
          <i>
            The size of the image's wrapper; to test retina behaviour, for
            example.
          </i>
        </p>
        <div tw="py-4 mt-6 text-lg grid grid-cols-2">
          <div tw="flex flex-wrap items-center">
            <Selector side="left" onSelect={id => setLeft(options[id])} />
            <div tw="px-4">
              <span tw="uppercase text-flamant-rose">{left.format}</span> |{' '}
              <span tw="text-limonade">
                {left.width}×{left.height}
              </span>{' '}
              | {left.quality}% → <span tw="text-magenta">{left.weight}</span>
            </div>
          </div>
          <div tw="flex flex-wrap items-center justify-end">
            <Selector side="right" onSelect={id => setRight(options[id])} />
            <div tw="px-4 text-right md:order-first">
              <span tw="text-magenta">{right.weight}</span> ← {right.quality}% |{' '}
              <span tw="text-limonade">
                {right.width}×{right.height}
              </span>{' '}
              | <span tw="uppercase text-flamant-rose">{right.format}</span>
            </div>
          </div>
        </div>
      </div>
      <div tw="relative pb-12 mt-6 overflow-x-auto">
        <ReactCompareSlider
          tw="rounded-lg"
          css={[
            {
              width,
              height,
            },
            window.innerWidth > width && tw`left-1/2 -translate-x-1/2`,
          ]}
          changePositionOnHover
          itemOne={
            <ReactCompareSliderImage
              src={`/images/${left.filename}`}
              alt="Left image"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={`/images/${right.filename}`}
              alt="Right image"
            />
          }
        />
      </div>
    </div>
  );
};

Comparator.defaultProps = {};

export default Comparator;
