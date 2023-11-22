import React from 'react';
import s from './TopFondItem.module.scss';

type Props = {
  item: {
    title: string;
    sub: string;
    comm: string;
    profit: string;
  };
};

const TopFondItem = ({ item }: Props) => {
  return (
    <div className={s.item}>
      <div className={s.title} style={{ width: '370px', marginRight: '4rem' }}>
        <div>{item.title}</div>
        <span>{item.sub}</span>
      </div>
      <div className={s.info}>
        <div>Доходность</div>
        <span>{item.profit}</span>
      </div>

      <div className={s.info}>
        <div>Комиссия</div>
        <span>{item.comm}</span>
      </div>
    </div>
  );
};

export default TopFondItem;
