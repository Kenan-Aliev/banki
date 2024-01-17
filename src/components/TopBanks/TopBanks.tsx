import React from 'react';
import s from './TopBanks.module.scss';
import TopBankItem from '@/components/TopBankItem/TopBankItem';
import { useAppSelector } from '@/hooks/redux';
import { selectTopDeposits } from '@/core/store/deposits/deposits-selectors';

interface TopBanksProps {
  title?: string;
  sub?: string;
}

const TopBanks = (props: TopBanksProps) => {
  const { title, sub } = props;

  const topDeposits = useAppSelector(selectTopDeposits)

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <mark>{!title ? 'ТОП 10 банков' : title}</mark>
        {!sub ? ` с выгодными вкладами в ${new Date().getFullYear()} году` : sub}
      </div>
      <div className={s.banks_items}>
        {topDeposits?.map((item, index) => (
          <TopBankItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TopBanks;
