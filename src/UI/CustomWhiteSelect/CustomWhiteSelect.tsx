import React from 'react';
import s from './CustomWhiteSelect.module.scss';

type Props = {
  options: string[];
  width?: number;
  height?: number;
};

const CustomWhiteSelect = ({ options, width, height }: Props) => {
  return (
    <div className={s.years} style={{ width: `${width}px`, height: `${height}px` }}>
      <select>
        {options.map((el, index) => (
          <option key={index}>{el}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomWhiteSelect;
