/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import { Image } from '../types/image';

export type Props = Image & {
  side: string;
  wrapperWidth: number;
};

const Meta = ({
  format,
  weight,
  quality,
  width,
  height,
  side,
  wrapperWidth,
}: Props): JSX.Element => (
  <div
    tw="flex flex-wrap mt-4 lg:mt-0"
    css={side === 'right' ? tw`flex-row-reverse lg:pr-4` : tw`lg:pl-4`}
  >
    <span tw="px-1 uppercase">{format}</span>
    <span tw="px-1"> | </span>
    <span tw="px-1">
      {width}×{height}
    </span>
    <span tw="px-1"> | </span>
    <span tw="px-1 text-limonade">@{Math.ceil(width / wrapperWidth)}x</span>
    <span tw="px-1"> | </span>
    <span tw="px-1">{quality}%</span>
    <span tw="px-1">{side === 'left' ? '→' : '←'}</span>
    <span tw="px-1 text-magenta">{weight}</span>
  </div>
);

Meta.defaultProps = {};

export default Meta;
