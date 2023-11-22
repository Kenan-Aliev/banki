import React from 'react';
import s from './SpecialOffersDeposit.module.scss';
import SpecialOfferItem from '@/components/Offers/SpecialOfferItem/SpecialOfferItem';
import { DepositCardInterface } from '@/models/Deposit/Deposit';

interface SpecialOffersDepositProps {
  deposits: DepositCardInterface[];
}
const SpecialOffersDeposit = ({ deposits }: SpecialOffersDepositProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <mark>Специальные </mark>
        предложения
      </div>
      <div className={s.itemsCont}>
        {deposits.map((item) => (
          <SpecialOfferItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffersDeposit;
