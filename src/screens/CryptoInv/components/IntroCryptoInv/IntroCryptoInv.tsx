import React from 'react';
import s from './IntroCryptoInv.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
};

const IntroCryptoInv = ({ items }: Props) => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Инвестиции / Что купить / <mark>Криптовалюта</mark>
        </div>
        <div className={s.title}>
          <mark>Криптовалюта в USDT</mark>
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap choiseItems={items} />
        </div>
      </div>
    </div>
  );
};

export default IntroCryptoInv;
