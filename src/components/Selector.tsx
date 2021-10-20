/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import options from './options.json';

export type Props = {
  current: number;
  onSelect: (id: number) => void;
  onUpload: (files: FileList | null) => void;
  side: string;
};

const Selector = ({
  current,
  onSelect,
  onUpload,
  side,
}: Props): JSX.Element => (
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
      tw="w-1/4 pr-8 truncate rounded text-minuit"
      css={side === 'right' ? tw`mr-2` : tw`ml-2`}
      onChange={e => onSelect(+e.target.value)}
      value={current}
    >
      <option value="-1">Choose an existing file</option>
      {options.map((option, key) => (
        <option key={`option-${side}-${key}`} value={key}>
          {option.filename}
        </option>
      ))}
    </select>
  </>
);

export default Selector;
