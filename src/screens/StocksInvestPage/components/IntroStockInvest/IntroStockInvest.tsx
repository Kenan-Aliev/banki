import React from 'react';
import s from './IntroStockInvest.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
};

const IntroStockInvest = ({ items }: Props) => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Инвестиции / Что купить / <mark>Акции</mark>
        </div>
        <div className={s.title}>
          <mark>Акции и котировки на сегодня</mark>
        </div>
        <div className={s.sub}>
          <p>
            Ваша цель — собрать инвестиционный портфель самостоятельно или проверить уже купленный актив?
            Актуальные котировки на акций ведущих российских компаний с указанием цен и дивидендной доходности
            позволят определиться с выбором. Информация представлена 04.09.2023. Купите акции онлайн.
          </p>
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap choiseItems={items} />
        </div>
      </div>
    </div>
  );
};

export default IntroStockInvest;
