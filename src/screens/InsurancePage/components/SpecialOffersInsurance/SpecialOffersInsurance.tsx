import React from 'react';
import s from './SpecialOffersInsurance.module.scss';
import SpecialOfferItem from '@/components/Offers/SpecialOfferItem/SpecialOfferItem';

interface SpecialOffersInsuranceProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  insuranceList: any[];
}
const SpecialOffersInsurance = (props: SpecialOffersInsuranceProps) => {
  const { insuranceList } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <mark>Специальные </mark>
        предложения
      </div>
      <div className={s.cont}>
        {insuranceList.map((item) => (
          <SpecialOfferItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffersInsurance;
