import React from 'react';
import s from './FondsOfferItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

type Props = {
  name: string;
  sub: string;
  img: StaticImageData;
  profit: string;
  comm: string;
};

const FondsOfferItem = ({ comm, profit, sub, img, name }: Props) => {
  return (
    <div className={s.item}>
      <div className={s.up}>
        <div className={s.info}>
          <Image src={img} alt={'иконка банка'} />
          <div className={s.name}>
            <div>{name}</div>
            <span>{sub}</span>
          </div>
          <div className={s.about_b}>
            <div className={s.info_item}>
              <div className={s.title}>Доходность за год</div>
              <span>{profit}</span>
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Комиссия за управление</div>
              <span>{comm}</span>
            </div>
          </div>
        </div>
        <BlueBtn text={'Купить'} width={222} fSize={20} />
      </div>
    </div>
  );
};

export default FondsOfferItem;
