'use client';

import React, { useState } from 'react';
import s from './OfferMoth.module.scss';
import arr_l from '@/assets/icons/banki_icon/Стрелка_left.svg';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import Image from 'next/image';
import ChoiceItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import OfferItem from '@/components/Offers/OfferItem/OfferItem';
import { DepositCardInterface } from '@/models/Deposit/Deposit';

type ItemT = {
  name: string;
  active: boolean;
};
type OfferMonthProps = {
  choiceItems?: ItemT[];
  offers: DepositCardInterface[];
};

const OfferMonth = (props: OfferMonthProps) => {
  const [currentChoise, setCurrentChoise] = useState('Вклады');

  const { choiceItems, offers } = props;

  return (
    <div className={s.offer_month}>
      <div className={s.title}>
        Предложения <span>месяца</span>
      </div>
      {choiceItems && choiceItems.length !== 0 && (
        <div className={s.select_items}>
          <ChoiceItemsMap
            setActive={setCurrentChoise}
            currentChoise={currentChoise}
            choiseItems={choiceItems}
          />
        </div>
      )}
      <div className={s.offer_cont}>
        <Image className={s.arr} alt={'icon'} src={arr_l} />
        {offers.map((item) => (
          <OfferItem item={item} key={item.id} />
        ))}
        <Image className={s.arr} alt={'icon'} src={arr_r} />
      </div>
    </div>
  );
};

export default OfferMonth;
