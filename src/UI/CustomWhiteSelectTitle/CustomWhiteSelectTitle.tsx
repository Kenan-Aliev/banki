'use client';

import React from 'react';
import s from './CustomWhiteSelectTitle.module.scss';

type Props = {
  title?: string;
  options: {
    text: string,
    value: number
  }[]
  width?: number;
  value?: string;
  handleChange?: (prop: string, value: any) => void
};

const CustomWhiteSelectTitle = ({ title, options, width, value, handleChange }: Props) => {

  return (
    <div className={s.years} style={{ width: width ? `${width}px` : '' }}>
      {title && <div>{title}</div>}
      <select value={value} onChange={(e) => handleChange('bank', e.target.value)}>
        <option selected value=''>Любой</option>
        {options?.map((el, index) => (
          <option value={el.value} key={el.value}>
            {el.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomWhiteSelectTitle;
