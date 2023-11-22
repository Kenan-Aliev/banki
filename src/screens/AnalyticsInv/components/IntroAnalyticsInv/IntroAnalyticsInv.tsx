import React from 'react';
import s from './IntroAnalyticsInv.module.scss';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
};

const IntroAnalyticsInv = ({ items }: Props) => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Инвестиции / <mark>Аналитика</mark>
        </div>
        <div className={s.title}>
          <mark>Аналитика</mark>
        </div>
        <div className={s.sub}>
          <p>
            Актуальные аналитические обзоры, оценки экономической ситуации в Кыргызстане и мире, рекомендации
            по российским и зарубежным акциям и облигациям, валютам и сырью от ведущих брокерских компаний и
            банков, а также последние исследования и прогнозы от экспертов Банки.ру. Все, что нужно для
            грамотного инвестирования.
          </p>
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap choiseItems={items} />
        </div>
      </div>
    </div>
  );
};

export default IntroAnalyticsInv;
