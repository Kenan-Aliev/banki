import React from 'react';
import s from './HowItWorksItem.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  img: StaticImageData;
  title: string;
  sub: string;
  text: string;
  w_text?: number;
  height?: number;
};

const HowItWorksItem = ({ img, title, sub, text, w_text, height }: Props) => {
  return (
    <div className={s.work_item} style={{ height: `${height}px` }}>
      <div className={s.info}>
        <div className={s.img}>
          <Image src={img} alt={'иконка наших сторон'} />
        </div>
        <div className={s.name}>
          <mark>{title}</mark>
          <br />
          {sub}
        </div>
      </div>
      <p style={{ width: `${w_text}px` }}>{text}</p>
    </div>
  );
};

export default HowItWorksItem;
