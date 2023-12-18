import React from 'react';
import s from './index.module.scss';
import { CreditItemT } from '@/models/Credits/Credits';

interface CreditTopBankItemProps {
  item: CreditItemT;
}

const CreditTopBankItem = (props: CreditTopBankItemProps) => {
  const {
    item: { loanName, loan_amount, loan_term, min_rating, max_rating, currency, bank_title },
  } = props;

  return (
    <div className={s.item}>
      <div className={s.title}>
        <div>{bank_title}</div>
        <span>{loanName}</span>
      </div>
      <div className={s.info}>
        <div>Эффективная ставка</div>
        <span>{min_rating === max_rating ? min_rating : `${min_rating} - ${max_rating}`} %</span>
      </div>
      <div className={s.info}>
        <div>Срок</div>
        <span>
          {loan_term.min === 0 ? `до ${loan_term.max}` : `${loan_term.min} - ${loan_term.max}`} мес.
        </span>
      </div>
      <div className={s.info}>
        <div>Сумма</div>
        <span>
          {loan_amount.min} — {loan_amount.max} {currency}
        </span>
      </div>
    </div>
  );
};

export default CreditTopBankItem;
