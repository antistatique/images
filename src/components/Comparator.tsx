/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import Meta from './Meta';
import options from './options.json';
import Selector from './Selector';
import Warnings from './Warnings';

const Comparator = (): JSX.Element => {
  const [left, setLeft] = useState(options[0]);
  const [right, setRight] = useState(options[1]);
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(800);

  const handleUpload = async (
    files: null | FileList,
    set: any // eslint-disable-line @typescript-eslint/no-explicit-any
  ): Promise<void> => {
    const file = files?.[0];
    if (file === null || file === undefined) return;

    const path = URL.createObjectURL(file);

    const format = file.name.split('.')[1];
    const filename = file.name;
    const weight = `${Math.round(file.size / 1000)}Ko`;
    const dimensions: { width: number; height: number } = await new Promise(
      resolve => {
        const img = new Image();
        img.onload = () => {
          resolve({
            height: img.height,
            width: img.width,
          });
        };
        img.src = path;
      }
    );

    set({
      format,
      weight,
      quality: '?',
      width: dimensions.width,
      height: dimensions.height,
      filename,
      path,
    });
  };

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
          <div>
            <div tw="flex flex-wrap items-center">
              <Selector
                current={options.findIndex(i => i.path === left.path)}
                side="left"
                onSelect={id => id > -1 && setLeft(options[id])}
                onUpload={files => handleUpload(files, setLeft)}
              />
              <Meta {...left} side="left" wrapperWidth={width} />
            </div>
            <Warnings {...left} wrapperWidth={width} />
          </div>
          <div>
            <div tw="flex flex-row-reverse flex-wrap items-center">
              <Selector
                current={options.findIndex(i => i.path === right.path)}
                side="right"
                onSelect={id => id > -1 && setRight(options[id])}
                onUpload={files => handleUpload(files, setRight)}
              />
              <Meta {...right} side="right" wrapperWidth={width} />
            </div>
            <div tw="text-right">
              <Warnings {...right} wrapperWidth={width} />
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
          itemOne={<ReactCompareSliderImage src={left.path} alt="Left image" />}
          itemTwo={
            <ReactCompareSliderImage src={right.path} alt="Right image" />
          }
        />
      </div>
    </div>
  );
};

Comparator.defaultProps = {};

export default Comparator;
