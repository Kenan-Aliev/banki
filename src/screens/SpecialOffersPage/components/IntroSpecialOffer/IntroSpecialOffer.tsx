import React from 'react';
import s from './IntroSpecialOffer.module.scss';
import ChoiseItem from '@/components/Choise/ChoiseItem/ChoiseItem';
import Link from 'next/link';

type choisesT = {
  name: string;
  active: boolean;
  link?: string;
};
type Props = {
  choises: choisesT[];
  setActive?: React.Dispatch<string>;
  current?: string;
};

const IntroSpecialOffer = ({ choises }: Props) => {
  return (
    <div className={s.page_info}>
      <div className={s.page_info_i}>
        <div className={s.pageName}>
          Главная / Вклады / <mark>Специальные предложения</mark>
        </div>
        <div className={s.title}>
          Специальные <mark>предложения</mark>
        </div>
        <div className={s.choiseItems}>
          {choises.map((el, index) => (
            <Link key={index} href={el.link}>
              <ChoiseItem name={el.name} active={el.active} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroSpecialOffer;
