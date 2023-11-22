import React from 'react';
import s from './BanksItems.module.scss';
import Image, { StaticImageData } from 'next/image';
import BanksItem from '@/screens/BanksPage/components/BanksItem/BanksItem';
import arr_r from '@/assets/icons/blue Arrow right.svg';

type charsT = {
  name: string;
  count: number;
};
type banksT = {
  title: string;
  sub: string;
  img: StaticImageData;
  m1: number;
  m2: number;
  chars: charsT[];
};
type Props = {
  items: banksT[];
};
const BanksItems = ({ items }: Props) => {
  const pages = [1, 2, 3, 4, 5, 6, 7];
  const currentPage = 1;

  return (
    <div className={s.wrap}>
      <div className={s.info}>
        Вы сможете заказать <mark>Кредитные карты в банках Кыргызстана</mark> с любым дизайном и удобном для
        вас банке.
      </div>
      <div className={s.cont}>
        {items.map((el, index) => (
          <BanksItem
            key={index}
            title={el.title}
            sub={el.sub}
            img={el.img}
            chars={el.chars}
            m1={el.m1}
            m2={el.m2}
          />
        ))}
      </div>
      <div className={s.pages}>
        {pages.map((el, index) => (
          <div className={el === currentPage ? s.page_item_a : s.page_item} key={index}>
            {el}
          </div>
        ))}
        <Image src={arr_r} alt={''} />
      </div>
    </div>
  );
};

export default BanksItems;
