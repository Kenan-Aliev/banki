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
};

const OfferMonth = (props: OfferMonthProps) => {
  const [currentChoise, setCurrentChoise] = useState('Вклады');

  const { choiceItems, offers } = props;



  const slides = useMemo(() => {
    if (offers && offers.length > 0 && currentChoise && choiceItems && choiceItems.length > 0) {
      switch (currentChoise) {
        case "Вклады":
          return Array(5).fill(0).map((offer, index) => {
            // const of = { ...offer } as DepositItemT
            return {
              node: <DepositOfferItem item={{} as DepositItemT} key={index} />
            }
          })
        case "Кредиты":
        case "Автокредиты":
        case "Микрозаймы":
          return Array(5).fill(0).map((offer, index) => {
            // const of = { ...offer } as CreditItemT
            return {
              node: <CreditOfferItem item={{} as CreditItemT} key={index} />
            }
          })

        case "Дебетовые карты":
        case "Кредитные карты":
          return Array(5).fill(0).map((offer, index) => {
            // const of = { ...offer } as CreditItemT
            return {
              node: <CardsOfferItem item={{} as CreditCardT} key={index} />
            }
          })

        case "Ипотека":
          return Array(5).fill(0).map((offer, index) => {
            // const of = { ...offer } as CreditItemT
            return {
              node: <IpotekaOfferItem item={{}} key={index} />
            }
          })
      }
    }
    else if (offers && offers.length > 0 && !choiceItems) {
      return offers.map((offer) => {
        const of = { ...offer } as DepositItemT
        return {
          node: <DepositOfferItem item={of} key={of.deposit_id} />
        }
      })
    }
  }, [currentChoise, offers, choiceItems])

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
            "1500": 4
          }}
        />
      </div>
    </div>
  );
};

export default OfferMonth;
