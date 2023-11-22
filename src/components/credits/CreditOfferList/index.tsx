import React from 'react';
import s from './index.module.scss';
import arr_l from '@/assets/icons/banki_icon/Стрелка_left.svg';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import Image from 'next/image';
import ChoiceItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import CreditOfferItem from '@/components/credits/CreditOfferItem';
import { CreditItemT } from '@/models/Credits/Credits';

type ItemT = {
  name: string;
  active: boolean;
};
interface CreditOfferListProps {
  choiceItems?: ItemT[];
  credits: CreditItemT[];
}

const CreditOfferList = (props: CreditOfferListProps) => {
  const { choiceItems, credits } = props;

  return (
    <div className={s.offer_month}>
      <div className={s.title}>
        Предложения <span>месяца</span>
      </div>
      {choiceItems && choiceItems.length !== 0 && (
        <div className={s.select_items}>
          <ChoiceItemsMap choiseItems={choiceItems} />
        </div>
      )}
      <div className={s.offer_cont}>
        <Image className={s.arr} alt={'icon'} src={arr_l} />
        {credits.map((item) => (
          <CreditOfferItem item={item} key={item.id} />
        ))}
        <Image className={s.arr} alt={'icon'} src={arr_r} />
      </div>
    </div>
  );
};

export default CreditOfferList;
