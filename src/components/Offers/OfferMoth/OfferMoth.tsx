'use client';

import React, { useMemo, useState } from 'react';
import s from './OfferMoth.module.scss';
import ChoiceItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import OfferItem from '@/components/Offers/OfferItem/OfferItem';
import { DepositCardInterface } from '@/models/Deposit/Deposit';
import Slider from '@/components/Slider/Slider';

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

  console.log(offers)

  const slides = useMemo(() => {
    if (offers && offers.length > 0) {
      return offers.map((offer) => {
        return {
          node: <OfferItem item={offer} key={offer.id} />
        }
      })
    }
  }, [offers])

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
        <Slider
          data={slides}
          perView={slides ? slides.length >= 4 ? 4 : slides.length : 0}
          infinite={false}
        />
      </div>
    </div>
  );
};

export default OfferMonth;
