/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import images from '../images.json';
import { Image } from '../types/image';

export type Props = {
  current: string;
  onSelect: (id: string) => void;
  onUpload: (files: FileList | null) => void;
  side: string;
};

const Selector = ({
  current,
  onSelect,
  onUpload,
  side,
}: Props): JSX.Element => {
  const options: Record<string, Image> = images;
  return (
    <>
      <label
        tw="flex items-center h-10 px-3 bg-white rounded cursor-pointer hover:bg-limonade transition-colors"
        title="Use your own image"
      >
        ➕
        <input
          type="file"
          tw="hidden"
          onChange={e => onUpload(e.target.files)}
          accept="image/*"
          multiple={false}
        />
      </label>
      <select
        tw="w-2/3 pr-8 truncate rounded lg:w-1/2 xl:w-1/4 text-minuit"
        css={side === 'right' ? tw`mr-2` : tw`ml-2`}
        onChange={e => onSelect(e.target.value)}
        value={current}
      >
        <option value="choose">Choose an existing file</option>
        {Object.keys(options).map((key, i) => (
          <option key={`option-${side}-${i}`} value={key}>
            {options?.[key].id}
          </option>
        ))}
      </select>
    </>
  );
};

export default Selector;
