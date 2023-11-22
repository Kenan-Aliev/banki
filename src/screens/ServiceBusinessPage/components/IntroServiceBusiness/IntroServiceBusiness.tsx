'use client';

import React, { useState } from 'react';
import s from './IntroServiceBusiness.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
};

const IntroServiceBusiness = ({ items }: Props) => {
  const [current, setCurrent] = useState<string>('Все продукты');

  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Бизнес / <mark>Расчётно-кассовое обслуживание</mark>
        </div>
        <div className={s.title}>
          <mark>
            Расчётно-кассовое
            <br /> обслуживание
          </mark>
        </div>
        <div className={s.sub}>
          <p>
            Удобный подбор тарифов РКО для ООО И ИП, которые хотят быстро открыть расчетный счет онлайн на
            выгодных условиях. Большая база тарифов ( 91 предложений от 20 банков), среди которых легко
            выбрать подходящий вариант! А еще вы можете сравнить тарифы и рассчитать финальную стоимость
            обслуживания по индивидуальным параметрам.
          </p>
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap currentChoise={current} setActive={setCurrent} choiseItems={items} />
        </div>
      </div>
    </div>
  );
};

export default IntroServiceBusiness;
