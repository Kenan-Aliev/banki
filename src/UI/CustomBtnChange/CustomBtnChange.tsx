import React from 'react';
import s from './CustomBtnChange.module.scss';
import Image from 'next/image';
import cust from '@/assets/icons/Tuning_icon.svg';

type Props = {
  title: string;
  width?: number;
  height?: number;
};
const CustomBtnChange = ({ title, width, height }: Props) => {
  return (
    <div className={s.btnChange} style={{ width: `${width}px`, height: `${height}px` }}>
      <Image alt={'иконка настройки'} src={cust} />
      {title}
    </div>
  );
};

export default CustomBtnChange;
