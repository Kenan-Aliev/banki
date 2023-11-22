'use client';

import React, { useState } from 'react';
import s from './IntroSlipBusiness.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
};

const IntroSlipBusiness = ({ items }: Props) => {
  const [currentChose, setCurrentChose] = useState<string>('Все продукты');

  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Бизнес / <mark>Дебетовые бизнес карты</mark>
        </div>
        <div className={s.title}>
          <mark>Дебетовые бизнес карты</mark>
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap currentChoise={currentChose} setActive={setCurrentChose} choiseItems={items} />
        </div>
      </div>
    </div>
  );
};

export default IntroSlipBusiness;
