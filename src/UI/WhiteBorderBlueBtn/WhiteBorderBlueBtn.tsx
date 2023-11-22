import React from 'react';
import s from './WhiteBorderBlueBtn.module.scss';

type Props = {
  text: string;
  fz?: number;
  width?: number;
  height?: number;
};

const WhiteBorderBlueBtn = ({ text, fz, height, width }: Props) => {
  return (
    <div className={s.btn} style={{ fontSize: `${fz}px`, width: `${width}px`, height: `${height}px` }}>
      {text}
    </div>
  );
};

export default WhiteBorderBlueBtn;
