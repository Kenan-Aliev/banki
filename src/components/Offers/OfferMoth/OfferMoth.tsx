'use client';

import React, { useMemo, useState } from 'react';
import s from './OfferMoth.module.scss';
import ChoiceItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import Slider from '@/components/Slider/Slider';
import CreditOfferItem from './CreditOfferItem/CreditOfferItem';
import DepositOfferItem from './DepositOfferItem/DepositOfferItem';
import { DepositItemT } from '@/models/Deposit/Deposit';
import { CreditItemT } from '@/models/Credits/Credits';
import CardsOfferItem from './CardsOfferItem/CardsOfferItem';
import { CreditCardT } from '@/models/Cards/Cards';
import IpotekaOfferItem from './IpotekaOfferItem/IpotekaOfferItem';

type ItemT = {
  name: string;
  active: boolean;
};
type OfferMonthProps = {
  choiceItems?: ItemT[];
  offers: any[];
  category?: string
};

const OfferMonth = (props: OfferMonthProps) => {
  const [currentChoise, setCurrentChoise] = useState('Вклады');

  const { choiceItems, offers, category } = props;



  const slides = useMemo(() => {
    if (!offers || offers.length === 0) return;

    const mapOffer = (item: any, Component: any, key: number) => ({
      node: <Component item={item} key={key} />,
    });

    if (!category && currentChoise && choiceItems && choiceItems.length > 0) {
      const offerTypeMap = {
        Вклады: Array(5).fill(0).map((_, index) =>
          mapOffer({} as DepositItemT, DepositOfferItem, index)
        ),
        Кредиты: Array(5).fill(0).map((_, index) =>
          mapOffer({} as CreditItemT, CreditOfferItem, index)
        ),
        Автокредиты: Array(5).fill(0).map((_, index) =>
          mapOffer({} as CreditItemT, CreditOfferItem, index)
        ),
        Микрозаймы: Array(5).fill(0).map((_, index) =>
          mapOffer({} as CreditItemT, CreditOfferItem, index)
        ),
        'Дебетовые карты': Array(5).fill(0).map((_, index) =>
          mapOffer({} as CreditCardT, CardsOfferItem, index)
        ),
        'Кредитные карты': Array(5).fill(0).map((_, index) =>
          mapOffer({} as CreditCardT, CardsOfferItem, index)
        ),
        Ипотека: Array(5).fill(0).map((_, index) =>
          mapOffer({}, IpotekaOfferItem, index)
        ),
      };

      return offerTypeMap[currentChoise];
    }
    else if (category && offers) {
      return offers.map((offer) => {
        if (category === 'Вклады') {
          const of = { ...offer } as DepositItemT;
          return mapOffer(of, DepositOfferItem, of.deposit_id);
        } else if (category === 'Кредиты') {
          const of = { ...offer } as CreditItemT;
          return mapOffer(of, CreditOfferItem, of.id);
        }
      });
    }
  }, [currentChoise, offers, choiceItems, category]);


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
          leftArr={true}
          rightArr={true}
          responsive={{
            "320": 1,
            "480": 2,
            "640": 3,
            "768": 3,
            "1500": 3
          }}
        />
      </div>
    </div>
  );
};

export default OfferMonth;
