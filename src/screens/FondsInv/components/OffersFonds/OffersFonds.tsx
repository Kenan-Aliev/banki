'use client';

import React from 'react';
import s from './OffersFonds.module.scss';
import CustomSelect from '@/UI/CustomSelect/CustomSelect';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { StaticImageData } from 'next/image';
import FondsOfferItem from '@/screens/FondsInv/components/FondsOfferItem/FondsOfferItem';

type dep = {
  name: string;
  sub: string;
  img: StaticImageData;
  profit: string;
  comm: string;
};
type ChangeTimeT = {
  date: string;
  time: string;
};
type Props = {
  offers: dep[];
  count: string;
  options: string[];
  changeTime?: ChangeTimeT;
};

const OffersFonds = ({ offers, options, count, changeTime }: Props) => {
  const offerMap = offers.map((el, index) => (
    <FondsOfferItem name={el.name} sub={el.sub} img={el.img} comm={el.comm} profit={el.profit} key={index} />
  ));

  return (
    <div className={s.deposits}>
      <div className={s.title}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>{count}</span>
          <CustomSelect img={lines} options={options} />
        </div>
        {changeTime && (
          <span className={s.time}>
            Обновлено {changeTime?.date} в {changeTime?.time}
          </span>
        )}
      </div>
      <div className={s.deposit_offers}>{offerMap}</div>
      <div className={s.btn_cont}>
        <BlueBtn text={'Смотреть все'} width={235} />
      </div>
    </div>
  );
};

export default OffersFonds;
