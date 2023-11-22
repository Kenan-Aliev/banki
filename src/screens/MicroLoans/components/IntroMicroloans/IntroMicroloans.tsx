import React from 'react';
import s from './IntroMicroloans.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
  setActive?: React.Dispatch<string>;
  current?: string;
};

const IntroMicroloans = ({ items, current, setActive }: Props) => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Кредиты / <mark>Микрозаймы</mark>
        </div>
        <div className={s.title}>
          Микрозаймы <mark>в Бишкеке</mark>
        </div>
        <div className={s.sub}>
          Выгодные предложения по срочным микрозаймам для физических лиц.
          <br /> Выбирайте низкие проценты, удобные способы оплаты и зачисления денег на карту.
          <br />
          <mark>Оставьте заявку на микрозайм онлайн.</mark>
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap currentChoise={current} setActive={setActive} choiseItems={items} />
        </div>
      </div>
    </div>
  );
};

export default IntroMicroloans;
