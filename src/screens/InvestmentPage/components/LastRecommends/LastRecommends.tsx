import React from 'react';
import s from './LastRecommends.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import LastRecommendItem from '@/screens/InvestmentPage/components/LastRecommends/LastRecommendItem/LastRecommendItem';
import { MarketItemT } from '@/models/Investment/Investment';

interface LastRecommendsProps {
  markets: MarketItemT[];
}
const LastRecommends = (props: LastRecommendsProps) => {
  const { markets } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <div className={s.title}>Последние рекомендации</div>
        <p>
          Актуальные аналитические обзоры, оценки экономической ситуации в Кыргызстане и мире, рекомендации по
          российским и зарубежным акциям и облигациям, валютам и сырью от ведущих брокерских компаний и
          банков, а также последние исследования и прогнозы от экспертов (НАЗВАНИЕ СЕРВИСА).
          <br />
          <br />
          Все, что нужно для грамотного инвестирования.
        </p>
        <BlueBtn text={'Перейти к списку акций'} width={314} />
      </div>
      <div className={s.items}>
        {markets.slice(0, 4).map((item) => (
          <LastRecommendItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LastRecommends;
