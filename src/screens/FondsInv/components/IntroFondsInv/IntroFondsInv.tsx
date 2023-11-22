import React from 'react';
import s from './IntroFondsInv.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
};

const IntroFondsInv = ({ items }: Props) => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Инвестиции / Что купить / <mark>Фонды</mark>
        </div>
        <div className={s.title}>
          <mark>
            Паевые инвестиционные фонды
            <br /> (ПИФы)
          </mark>
        </div>
        <div className={s.sub}>
          <p>
            Ваша цель — подобрать эффективный инструмент, который подходит для пассивных инвестиций? Купив
            пай, даже на небольшую сумму, можно получать прибыль от портфеля ценных бумаг, которым управляет
            профессионал под присмотром ЦБ РФ. В нашей подборке предложения от крупных управляющих компаний по
            177 паевому инвестиционному фонду, актуальные на 04.09.2023. Здесь же вы найдете информацию об
            инвестиционной стратегии фонда и полученной ранее доходности.
          </p>
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap choiseItems={items} />
        </div>
      </div>
    </div>
  );
};

export default IntroFondsInv;
