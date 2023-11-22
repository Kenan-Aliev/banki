import React from 'react';
import s from './PopularOffers.module.scss';
import PopularOfferItem from '@/screens/DepositsPage/components/PopularOfferItem/PopularOfferItem';
import { StaticImageData } from 'next/image';

type OfferItem = {
  active: boolean;
  img: StaticImageData;
  title: string;
  sub: string;
  id: number;
};

type Props = {
  data: OfferItem[];
  active?: number;
  setActive?: React.Dispatch<number>;
};
const PopularOffers = ({ data, setActive, active }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <mark>Популярные </mark>
        предложения
      </div>
      <div className={s.itemsCont}>
        {data.map((el, index: number) => (
          <PopularOfferItem
            id={el.id}
            key={index}
            active={el.id === active}
            img={el.img}
            current={active}
            setActive={setActive}
            title={el.title}
            sub={el.sub}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularOffers;
