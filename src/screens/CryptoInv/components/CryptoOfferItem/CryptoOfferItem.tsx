import React from 'react';
import s from './CryptoOfferItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

type Props = {
  name: string;
  sub: string;
  img: StaticImageData;
  profit: string;
  price: string;
};

const CryptoOfferItem = ({ price, profit, sub, img, name }: Props) => {
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
              <div className={s.title}>Цена, USDT</div>
              <span>{price}</span>
            </div>
            <div className={s.info_item}>
              <div className={s.title}>Изменение цены за 1 день</div>
              <span style={{ color: '#4DA7FF' }}>{profit}</span>
            </div>
          </div>
        </div>
        <BlueBtn text={'Перейти на сайт'} width={222} fSize={20} />
      </div>
    </div>
  );
};

export default CryptoOfferItem;
