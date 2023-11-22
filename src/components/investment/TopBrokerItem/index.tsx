import React from 'react';
import s from './index.module.scss';
import { BrokerItemT } from '@/models/Investment/Investment';

interface TopBrokerItemProps {
  item: BrokerItemT;
}

const TopBrokerItem = (props: TopBrokerItemProps) => {
  const {
    item: { name, description },
  } = props;

  return (
    <div className={s.item}>
      <div className={s.title} style={{ width: '370px', marginRight: '4rem' }}>
        <div>{name}</div>
        <span>{description}</span>
      </div>
      <div className={s.info}>
        <div>Комиссия</div>
        <span>{'0,04'} %</span>
      </div>

      <div className={s.info}>
        <div>Обслуживание</div>
        <span>{0} ₽</span>
      </div>
    </div>
  );
};

export default TopBrokerItem;
