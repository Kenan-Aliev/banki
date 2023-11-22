import React from 'react';
import s from './IntroInvestSpecialOffer.module.scss';
import ChoiseItem from '@/components/Choise/ChoiseItem/ChoiseItem';
import Link from 'next/link';

type choisesT = {
  name: string;
  active: boolean;
  link?: string;
};
type Props = {
  choises: choisesT[];
};

const IntroInvestSpecialOffer = ({ choises }: Props) => {
  const choiseItems = choises.map((el, index) => (
    <Link href={el.link} key={index}>
      <ChoiseItem key={index} name={el.name} active={el.active} />
    </Link>
  ));

  return (
    <div className={s.page_info}>
      <div className={s.page_info_i}>
        <div className={s.pageName}>
          Главная / Инвестиции / <mark>Специальные предложения</mark>
        </div>
        <div className={s.title}>
          Специальные <mark>предложения</mark>
        </div>
        <div className={s.choiseItems}>{choiseItems}</div>
      </div>
    </div>
  );
};

export default IntroInvestSpecialOffer;
