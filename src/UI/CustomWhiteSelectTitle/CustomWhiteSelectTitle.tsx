'use client';

import React from 'react';
import s from './CustomWhiteSelectTitle.module.scss';

type Props = {
  title?: string;
  options: string[];
  width?: number;
  value?: string;
  setValue?: React.Dispatch<string>;
};

const CustomWhiteSelectTitle = ({ title, options, width, value, setValue }: Props) => {
  const handleChange = (e) => setValue && setValue(e.target.value);

  return (
    <div className={s.years} style={{ width: width ? `${width}px` : '' }}>
      {title && <div>{title}</div>}
      <select value={value} onChange={handleChange}>
        {options.map((el, index) => (
          <option value={el} key={index}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomWhiteSelectTitle;
