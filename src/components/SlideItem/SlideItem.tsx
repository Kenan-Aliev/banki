import React from 'react';
import s from './SlideItem.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  img: StaticImageData;
  name: string;
  width: number;
};

const SlideItem = ({ img, name, width }: Props) => {
  return (
    <div className={s.slideItem}>
      <Image height={40} width={40} src={img} alt={name} />
      <span style={{ width: width === 0 ? 'auto' : ` ${width}px` }}>{name}</span>
    </div>
  );
};

export default SlideItem;
