import React from 'react';
import s from './BlueBtn.module.scss';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  width: number;
  height?: number;
  fSize?: number;
  count?: number;
}

const BlueBtn = ({ text, width, height, fSize, count, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={s.btn}
      style={{
        width: `${width}px`,
        height: height ? `${height}px` : '',
        fontSize: fSize ? `${fSize}px` : '',
      }}
    >
      {text}
      {count && <span>{count}</span>}
    </button>
  );
};

export default BlueBtn;
