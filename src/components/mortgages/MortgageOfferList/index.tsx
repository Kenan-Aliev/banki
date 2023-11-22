import React from 'react';
import s from './index.module.scss';
import CustomSelect from '@/UI/CustomSelect/CustomSelect';
import lines from '@/assets/icons/banki_icon/3-line.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import MortgageOfferItem from '@/components/mortgages/MortgageOfferItem';
import { MortgageItemT } from '@/models/Mortgages/Mortgages';

interface MortgageOfferListProps {
  mortgages: MortgageItemT[];
  title?: string;
  subtitle?: string;
  options?: string[];
  isSelect?: boolean;
}

const MortgageOfferList = (props: MortgageOfferListProps) => {
  const {
    mortgages,
    options = ['По популярности'],
    title = '943 кредитов',
    subtitle = 'подобрано',
    isSelect = true,
  } = props;

  return (
    <div className={s.deposits}>
      <div className={s.title}>
        <span>
          <mark>{title}</mark> {subtitle}
        </span>
        {isSelect && <CustomSelect img={lines} options={options} />}
      </div>
      <div className={s.deposit_offers}>
        {mortgages.map((item) => (
          <MortgageOfferItem item={item} key={item.id} />
        ))}
      </div>
      <div className={s.btn_cont}>
        <BlueBtn text={'Смотреть все'} width={235} />
      </div>
    </div>
  );
};

export default MortgageOfferList;
