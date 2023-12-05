'use client';

import React, { useMemo, useState } from 'react';
import s from './OfferMoth.module.scss';
import ChoiceItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import OfferItem from '@/components/Offers/OfferItem/OfferItem';
import { DepositItemT } from '@/models/Deposit/Deposit';
import Slider from '@/components/Slider/Slider';

type ItemT = {
  name: string;
  active: boolean;
};
type OfferMonthProps = {
  choiceItems?: ItemT[];
  offers: DepositItemT[];
};

const OfferMonth = (props: OfferMonthProps) => {
  const [currentChoise, setCurrentChoise] = useState('Вклады');

  const { choiceItems, offers } = props;

  const slides = useMemo(() => {
    if (offers && offers.length > 0) {
      return offers.map((offer) => {
        return {
          node: <OfferItem item={offer} key={offer.deposit_id} />
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
          infinite={false}
          responsive={{
            "320": 1,
            "480": 2,
            "640": 3,
            "768": 3,
            "1500": 4
          }}
        />
      </div>
    </div>
  );
};

export default OfferMonth;
