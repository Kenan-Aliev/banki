'use client';

import React from 'react';
import s from './CustomInputDateTitle.module.scss';

type Props = {
  title: string;
  width?: number;
  value?: string;
  setValue?: React.Dispatch<string>;
};

const CustomInputDateTitle = ({ title, width, setValue, value }: Props) => {
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className={s.years} style={{ width: width ? `${width}px` : '' }}>
      <div>{title}</div>
      <input value={value} onChange={handleChange} type='date' />
    </div>
  );
};

export default CustomInputDateTitle;
