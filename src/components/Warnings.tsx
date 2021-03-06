/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import { Image } from '../types/image';

export type Props = Image & {
  wrapperWidth: number;
  wrapperHeight: number;
};

const Warnings = ({
  width,
  height,
  weight,
  wrapperWidth,
  wrapperHeight,
}: Props): JSX.Element => (
  <div tw="mt-4 font-mono text-sm space-y-2 text-limonade">
    {wrapperWidth / wrapperHeight !== width / height && (
      <p>
        ⚠️ The wrapper's <b>ratio</b> don't match the image ratio
      </p>
    )}
    {width / wrapperWidth > 2 && (
      <p>
        ⚠️ <b>Too big</b> for this usage, even for retina display; max @2x, here
        @{Math.ceil(width / wrapperWidth)}x
      </p>
    )}
    {+weight.replace('Ko', '') > 500 && (
      <p>
        ⚠️ Very <b>heavy</b>, check the compression ratio
      </p>
    )}
  </div>
);

Warnings.defaultProps = {};

export default Warnings;
