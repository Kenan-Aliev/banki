'use client';

import React from 'react';
import s from './CustomSelect.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  img?: StaticImageData;
  options: string[];
  fz?: number;
  handleSort?: (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => void;
};

const CustomSelect = ({ img, options, fz, handleSort }: Props) => {
  const optionItems = options.map((el, index) => (
    <option style={{ fontSize: `${fz}px` }} key={index}>
      {el}
    </option>
  ));

  return (
    <div className={s.select}>
      {img && <Image src={img} alt='' />}

      <select onClick={(e) => handleSort(e)} style={{ fontSize: `${fz}px` }}>
        {optionItems}
      </select>
    </div>
  );
};

export default CustomSelect;
