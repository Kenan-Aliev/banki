import React from 'react';
import s from './StockOfferItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

type Props = {
  name: string;
  sub: string;
  price: string;
  change: string;
  subPrice?: string;
  img: StaticImageData;
};

const StockOfferItem = ({ change, img, sub, subPrice, price, name }: Props) => {
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
              <span>{price}</span>
              {subPrice && <div className={s.subprice}>{subPrice}</div>}
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Изменение цены, за месяц</div>
              <span style={{ color: '#4DA7FF' }}>{change}</span>
            </div>
          </div>
        </div>
        <BlueBtn text={'Купить'} width={222} fSize={20} />
      </div>
    </div>
  );
};

export default StockOfferItem;
