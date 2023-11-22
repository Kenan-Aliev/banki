import React from 'react';
import s from './index.module.scss';
import { CreditItemT } from '@/models/Credits/Credits';

interface CreditTopBankItemProps {
  item: CreditItemT;
}

const CreditTopBankItem = (props: CreditTopBankItemProps) => {
  const {
    item: { name, min_amount, max_amount, timeframe_min, timeframe_max },
  } = props;

  return (
    <div className={s.item}>
      <div className={s.title}>
        {/* TODO bank name instead deposit name*/}
        <div>{name}</div>
        <span>{'description'}</span>
      </div>
      <div className={s.info}>
        <div>Эффективная ставка</div>
        <span>{'rate'} %</span>
      </div>
      <div className={s.info}>
        <div>Срок</div>
        <span>
          {timeframe_min} - {timeframe_max} дней
        </span>
      </div>
      <div className={s.info}>
        <div>Сумма</div>
        <span>
          {min_amount} — {max_amount} ₽
        </span>
      </div>
    </div>
  );
};

export default CreditTopBankItem;
