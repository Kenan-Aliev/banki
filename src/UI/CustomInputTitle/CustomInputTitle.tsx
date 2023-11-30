'use client';

import React from 'react';
import s from './CustomInputTitle.module.scss';

type Props = {
  title: string;
  width?: number;
  place?: string;
  colorTitle?: string;
  setValue?: React.Dispatch<number>;
  value?: number;
  type?: string
};

const CustomInputTitle = ({ title, width, place, colorTitle, setValue, value, type = 'text' }: Props) => {
  const handleChange = (e) => setValue && setValue(e.target.value);

  return (
    <div className={s.years} style={{ width: `${width}px` }}>
      <div style={{ color: `${colorTitle}` }}>{title}</div>
      <input type={type} placeholder={place} onChange={handleChange} defaultValue={value} />
    </div>
  );
};

export default CustomInputTitle;
