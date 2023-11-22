import React from 'react';
import s from './TopBanks.module.scss';
import TopBankItem from '@/components/TopBankItem/TopBankItem';
import { DepositCardInterface } from '@/models/Deposit/Deposit';

interface TopBanksProps {
  fz?: number;
  title?: string;
  sub?: string;
  banks: DepositCardInterface[];
}

const TopBanks = (props: TopBanksProps) => {
  const { title, sub, banks, fz } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.title} style={{ fontSize: fz ? `${fz}px` : '' }}>
        <mark>{!title ? 'ТОП 10 банков' : title}</mark>
        {!sub ? ' с выгодными вкладами в 2023 году' : sub}
      </div>
      <div className={s.banks_items}>
        {banks.map((item, index) => (
          <TopBankItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TopBanks;
