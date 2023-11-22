import React from 'react';
import s from './IntroObliagtionInvest.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
};

const IntroObliagtionInvest = ({ items }: Props) => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Инвестиции / Что купить / <mark>Облигации</mark>
        </div>
        <div className={s.title}>
          <mark>Купить облигации</mark>
        </div>
        <div className={s.sub}>
          <p>
            Ваша цель — пассивный гарантированный доход с процентом выше, чем у банковских депозитов? Тогда
            стоит рассмотреть такой инструмент, как облигация.
          </p>
          <p>
            Выбирайте облигации в рублях и в иностранной валюте (еврооблигации) для инвестиционного портфеля,
            оценив срок вложений, степень риска, возможный доход. Здесь можно купить онлайн 430 ценных бумаг
            этого типа. Все данные актуальны на 04.09.2023.
          </p>
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap choiseItems={items} />
        </div>
      </div>
    </div>
  );
};

export default IntroObliagtionInvest;
