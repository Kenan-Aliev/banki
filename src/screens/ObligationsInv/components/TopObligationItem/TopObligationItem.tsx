import React from 'react';
import s from './TopObligationItem.module.scss';

type Props = {
  item: {
    name: string;
    sub: string;
    price: number;
    change: string;
  };
};

const TopObligationItem = ({ item }: Props) => {
  return (
    <div className={s.item}>
      <div className={s.title} style={{ width: '370px', marginRight: '4rem' }}>
        <div>{item.name}</div>
        <span>{item.sub}</span>
      </div>
      <div className={s.info}>
        <div>Цена</div>
        <span>{item.price}</span>
      </div>

      <div className={s.info}>
        <div>Доходность</div>
        <span>{item.change}</span>
      </div>
    </div>
  );
};

export default TopObligationItem;
