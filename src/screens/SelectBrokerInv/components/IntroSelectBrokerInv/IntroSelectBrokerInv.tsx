import React from 'react';
import s from './IntroSelectBrokerInv.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
};

const IntroSelectBrokerInv = ({ items }: Props) => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Инвестиции / <mark>Подборать брокера</mark>
        </div>
        <div className={s.title}>
          <mark>
            Рейтинг брокеров: открыть
            <br /> брокерский счет
          </mark>
        </div>
        <div className={s.sub}>
          <p>
            В этом разделе представлена подробная актуальная на 03.09.2023 информация о крупнейших брокерах
            Кыргызстане. Рейтинги и отзывы реальных пользователей, которые уже открыли брокерский счет и на
            своем опыте оценили операторов фондового рынка по качеству сервиса, надежности и удобству
            приложений. Комиссия за сделку указана при торговле ценными бумагами на Московской бирже.
          </p>
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap choiseItems={items} />
        </div>
      </div>
    </div>
  );
};

export default IntroSelectBrokerInv;
