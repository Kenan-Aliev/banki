import React from 'react';
import s from './TopFonds.module.scss';
import TopFondItem from '@/screens/FondsInv/components/TopFondItem/TopFondItem';

type banksT = {
  title: string;
  sub: string;
  comm: string;
  profit: string;
};
type Props = {
  fz?: number;
  title?: string;
  sub?: string;
  fonds: banksT[];
};

const TopFonds = ({ title, sub, fonds, fz }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title} style={{ fontSize: `${fz}px` }}>
        <mark>{!title ? 'ТОП 10' : title}</mark>
        {!sub ? ' паевых инвестиционных фондов в 2023 году' : sub}
      </div>
      <div className={s.banks_items}>
        {fonds.map((el, index) => (
          <TopFondItem key={index} item={el} />
        ))}
      </div>
    </div>
  );
};

export default TopFonds;
