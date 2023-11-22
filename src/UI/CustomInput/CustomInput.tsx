import React from 'react';
import s from './CustomInput.module.scss';

type Props = {
  width?: number;
  height?: number;
  place?: string;
  border?: string;
};
const CustomInput = ({ width, height, place, border }: Props) => {
  return (
    <div className={s.cont} style={{ width: `${width}px`, height: `${height}px`, borderColor: `${border}` }}>
      <input className={s.inp} placeholder={place} type='text' />
    </div>
  );
};

export default CustomInput;
