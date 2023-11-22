'use client';

import React, { useState } from 'react';
import s from './IntroPaymentBusiness.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
};

const IntroPaymentBusiness = ({ items }: Props) => {
  const [current, setCurrent] = useState<string>('Все продукты');

  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Бизнес / <mark>Кредиты для ИП</mark>
        </div>
        <div className={s.title}>
          <mark>Кредиты для ИП</mark>
        </div>
        <div className={s.sub}>
          <p>
            Здесь можно быстро оформить онлайн кредит на бизнес для индивидуального предпринимателя, а также
            найти самые низкие ставки на 04.09.2023 и специальные условия для ИП
          </p>
          <p>Возможно выгодное кредитование без залога и поручителей.</p>
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap currentChoise={current} setActive={setCurrent} choiseItems={items} />
        </div>
      </div>
    </div>
  );
};

export default IntroPaymentBusiness;
