import React from 'react';
import s from './index.module.scss';
import CreditTopBankItem from '@/components/credits/CreditTopBankItem';
import { CreditItemT } from '@/models/Credits/Credits';

interface CreditTopBankListProps {
  title?: string;
  subtitle?: string;
  credits: CreditItemT[];
}

const CreditTopBankList = (props: CreditTopBankListProps) => {
  const {
    title = 'Потребительские кредиты в Бишкеке',
    subtitle = ' - ТОП 10 банков в 2023 году',
    credits,
  } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <mark>{title}</mark>
        {subtitle}
      </div>
      <div className={s.banks_items}>
        {credits.map((item, index) => (
          <CreditTopBankItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CreditTopBankList;
