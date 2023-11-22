import React from 'react';
import s from './BondItem.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  img: StaticImageData;
  title: string;
  sub: string;
  rate: number;
  money: number;
};
const BondItem = ({ img, title, sub, rate, money }: Props) => {
  return (
    <div className={s.item}>
      <Image src={img} alt={'bank icon'} />
      <div className={s.info}>
        <div>
          <span>{title}</span>
          <span>{rate}%</span>
        </div>
        <div>
          <span>{sub}</span>
          <span>{money} ₽</span>
        </div>
      </div>
    </div>
  );
};

export default BondItem;
