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
  wrapperWidth: number;
};

const Warnings = ({ width, weight, wrapperWidth }: Props): JSX.Element => (
  <div tw="mt-4 space-y-2 text-limonade">
    {width / wrapperWidth > 2 && (
      <p>
        ⚠️ Too big for this uses, even for retina display; max @2x, here @
        {Math.ceil(width / wrapperWidth)}x
      </p>
    )}
    {+weight.replace('Ko', '') > 500 && (
      <p>⚠️ Very heavy, check the compression ratio</p>
    )}
  </div>
);

Warnings.defaultProps = {};

export default Warnings;
