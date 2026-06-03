import React from 'react';

import type { Image } from '../types/image';
import cm from '../utils/cm';

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
}: Props): React.JSX.Element => (
  <div
    className={cm('flex flex-wrap mt-4 lg:mt-0', side === 'right' ? 'flex-row-reverse lg:pr-4' : 'lg:pl-4')}
  >
    <span className="px-1 uppercase">{format}</span>
    <span className="px-1"> | </span>
    <span className="px-1">{width}×{height}</span>
    <span className="px-1"> | </span>
    <span className="px-1 text-limonade">@{Math.ceil(width / wrapperWidth)}x</span>
    <span className="px-1"> | </span>
    <span className="px-1">
      {/^\d+$/.test(quality) ? `${quality}%` : quality}
    </span>
    <span className="px-1">{side === 'left' ? '→' : '←'}</span>
    <span className="px-1 text-magenta">{weight}</span>
  </div>
);

Meta.defaultProps = {};

export default Meta;
