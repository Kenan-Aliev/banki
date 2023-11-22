import React from 'react';
import s from './TopBankItem.module.scss';
import { DepositCardInterface } from '@/models/Deposit/Deposit';

interface TopBankItemProps {
  item: DepositCardInterface;
}

const features = 'онлайн';

const TopBankItem = (props: TopBankItemProps) => {
  const {
    item: { name, rate, min_amount, timeframe_min, description },
  } = props;

  return (
    <div className={s.item}>
      <div className={s.title}>
        {/* TODO bank name instead deposit name*/}
        <div>{name}</div>
        <span>{description}</span>
      </div>
      <div className={s.info}>
        <div>Эффективная ставка</div>
        <span>до {rate} %</span>
      </div>
      <div className={s.info}>
        <div>Срок</div>
        <span>{timeframe_min} дн.</span>
      </div>
      <div className={s.info}>
        <div>Сумма</div>
        <span>{min_amount} ₽</span>
      </div>
      <div className={s.info}>
        {/* TODO features when api is ready*/}
        <div>{features ? 'Особенности' : ''}</div>
        <span>{features}</span>
      </div>
    </div>
  );
};

export default TopBankItem;
