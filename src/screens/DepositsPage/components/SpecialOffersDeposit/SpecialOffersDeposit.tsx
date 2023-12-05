import React from 'react';
import s from './SpecialOffersDeposit.module.scss';
import SpecialOfferItem from '@/components/Offers/SpecialOfferItem/SpecialOfferItem';
import { DepositItemT } from '@/models/Deposit/Deposit';

interface SpecialOffersDepositProps {
  deposits: DepositItemT[];
}
const SpecialOffersDeposit = ({ deposits }: SpecialOffersDepositProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <mark>Специальные </mark>
        предложения
      </div>
      <div className={s.itemsCont}>
        {deposits?.map((item) => (
          <SpecialOfferItem item={item} key={item.deposit_id} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffersDeposit;
