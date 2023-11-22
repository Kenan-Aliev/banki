import React from 'react';
import s from './ObliagtionOfferItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

type Props = {
  name: string;
  sub: string;
  price: number;
  change: string;
  subPrice?: string;
  img: StaticImageData;
  subChange: string;
};

const ObliagtionOfferItem = ({ change, img, sub, subPrice, price, name, subChange }: Props) => {
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
              <div className={s.title}>Цена за акцию</div>
              <span>{`${price} ₽`}</span>
              {subPrice && <div className={s.subprice}>{subPrice}</div>}
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Изменение цены, за месяц</div>
              <span>{change}</span>
              {subChange && <div className={s.subprice}>{subChange}</div>}
            </div>
          </div>
        </div>
        <BlueBtn text={'Купить'} width={222} fSize={20} />
      </div>
    </div>
  );
};

export default ObliagtionOfferItem;
