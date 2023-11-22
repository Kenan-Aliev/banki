import React from 'react';
import s from './IntroInvest.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
  current?: string;
  setActive?: React.Dispatch<React.SetStateAction<string>>;
};

const IntroInvest = ({ items, setActive, current }: Props) => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / <mark>Инвестиции</mark>
        </div>
        <div className={s.title}>
          <mark>Инвестиции</mark>
        </div>
        <div className={s.sub}>
          <p>
            Узнавайте все об инвестировании: как сохранить и приумножить свой капитал, как вложить деньги в
            акции, облигации, биржевые паевые и инвестиционные фонды и альтернативные активы.
          </p>
          <p>
            На (НАЗВАНИЕ СЕРВИСА) легко подобрать брокера для открытия ИИС, а также купить российские и
            иностранные ценные бумаги.
          </p>
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap setActive={setActive} currentChoise={current} choiseItems={items} />
        </div>
      </div>
    </div>
  );
};

export default IntroInvest;
