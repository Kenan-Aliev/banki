import React from 'react';
import s from './index.module.scss';
import CustomSelect from '@/UI/CustomSelect/CustomSelect';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CreditCalculatorBankItem from '@/components/credits/CreditCalculatorBankItem';
import { CreditItemT } from '@/models/Credits/Credits';

interface CreditCalculatorBankListProps {
  credits: CreditItemT[];
  subtitle?: string;
  options?: string[];
}

const CreditCalculatorBankList = (props: CreditCalculatorBankListProps) => {
  const { credits, options = ['По популярности'], subtitle = 'предложения' } = props;

  return (
    <div className={s.deposits}>
      <div className={s.title}>
        <span>
          <mark>{credits.length}</mark>
          {subtitle}
        </span>
        <CustomSelect img={lines} options={options} />
      </div>
      <div className={s.deposit_offers}>
        {credits.map((item) => (
          <CreditCalculatorBankItem item={item} key={item.id} />
        ))}
      </div>
      <div className={s.btn_cont}>
        <BlueBtn text={'Смотреть все'} width={235} />
      </div>
    </div>
  );
};

export default CreditCalculatorBankList;
