/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

export type Props = {
  format: string;
  weight: string;
  quality: string;
  width: number;
  height: number;
  filename: string;
  path: string;
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
  <div tw="flex px-4" css={side === 'right' && tw`flex-row-reverse`}>
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
