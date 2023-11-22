import React from 'react';
import s from './OffersInvestItem.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  img: StaticImageData;
  name: string;
  info: string;
  title: string;
  sub: string;
};
const OffersInvestItem = ({ img, name, info, title, sub }: Props) => {
  return (
    <div className={s.item}>
      <div className={s.info}>
        <Image src={img} alt={'bank icon'} />
        <div className={s.info_i}>
          <div className={s.title}>{title}</div>
          <div className={s.sub}>{sub}</div>
        </div>
      </div>
      <div className={s.item_info}>
        <div className={s.title}>{name}</div>
        <div className={s.sub}>{info}</div>
      </div>
    </div>
  );
};

export default OffersInvestItem;
