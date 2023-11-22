import React from 'react';
import s from './LastRecommendsA.module.scss';
import LastRecommendItemA from '@/screens/AnalyticsInv/components/LastRecommendItemA/LastRecommendItemA';
import { StaticImageData } from 'next/image';

type RecommendT = {
  name: string;
  sub: string;
  img: StaticImageData;
  recommendation: boolean;
  stockName: string;
  subName: string;
};
type Props = {
  title: string;
  recommendItems: RecommendT[];
};
const LastRecommendsA = ({ title, recommendItems }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{title}</div>
      <div className={s.items_wrap}>
        {recommendItems.map((el, index) => (
          <LastRecommendItemA
            name={el.name}
            sub={el.sub}
            key={index}
            img={el.img}
            recommendation={el.recommendation}
            stockName={el.stockName}
            subName={el.subName}
          />
        ))}
      </div>
    </div>
  );
};

export default LastRecommendsA;
