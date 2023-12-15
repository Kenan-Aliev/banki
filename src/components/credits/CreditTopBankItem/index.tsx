import React from 'react';
import s from './index.module.scss';
import { CreditItemT } from '@/models/Credits/Credits';

interface CreditTopBankItemProps {
  item: CreditItemT;
}

const CreditTopBankItem = (props: CreditTopBankItemProps) => {
  const {
    item: { loanName, loan_amount, loan_term },
  } = props;

  return (
    <div className={s.item}>
      <div className={s.title}>
        {/* TODO bank name instead deposit name*/}
        <div>{loanName}</div>
        <span>{'description'}</span>
      </div>
      <div className={s.info}>
        <div>Эффективная ставка</div>
        <span>{'rate'} %</span>
      </div>
      <div className={s.info}>
        <div>Срок</div>
        <span>
          {loan_term.min} - {loan_term.max} мес.
        </span>
      </div>
      <div className={s.info}>
        <div>Сумма</div>
        <span>
          {loan_amount.min} — {loan_amount.max} ₽
        </span>
      </div>
    </div>
  );
};

export default CreditTopBankItem;
