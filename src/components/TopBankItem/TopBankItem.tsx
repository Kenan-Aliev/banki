import React from 'react';
import s from './TopBankItem.module.scss';
import { DepositCardInterface, DepositItemT } from '@/models/Deposit/Deposit';
import { currencies } from '@/core/data/currency';

interface TopBankItemProps {
  item: DepositItemT;
}


const TopBankItem = (props: TopBankItemProps) => {
  const {
    item: { deposit_name, interest_rate, amount_range, term_range, currency, bank_title },
  } = props;

  const cur = currencies.find(c => c.value === currency)?.text

  return (
    <div className={s.item}>
      <div className={s.title}>
        <div>{bank_title}</div>
        <span>{deposit_name}</span>
      </div>
      <div className={s.info}>
        <div>Эффективная ставка</div>
        <span>до {interest_rate} %</span>
      </div>
      <div className={s.info}>
        <div>Срок</div>
        <span>{term_range.min} - {term_range.max} мес.</span>
      </div>
      <div className={s.info}>
        <div>Сумма</div>
        <span>
          {amount_range.max ? `${amount_range.min} — ${amount_range.max}` : `от ${amount_range.min}`} {cur}
        </span>
      </div>
      {/* <div className={s.info}>
        <div>{features ? 'Особенности' : ''}</div>
        <span>{features}</span>
      </div> */}
    </div>
  );
};

export default TopBankItem;
