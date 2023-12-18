import React from 'react';
import s from './DepositOfferItem.module.scss';
import Image from 'next/image';
import mockBankIcon from '@/assets/icons/banki_icon/loco.svg';
import { DepositItemT } from '@/models/Deposit/Deposit';
import { baseUrl } from '@/core/const/baseUrl';

interface OfferItemProps {
  item: DepositItemT;
}

const DepositOfferItem = (props: OfferItemProps) => {
  const {
    item: { deposit_name, interest_rate, term_range, bank_title, bank_logo },
  } = props;

  return (
    <div className={s.offer_item}>
      <div className={s.inf}>
        <Image alt={'icon'} src={baseUrl + bank_logo} width={50} height={50} />
        <div className={s.info}>
          <div className={s.name}>{bank_title}</div>
          <div className={s.subtitle}>{deposit_name}</div>
        </div>
      </div>
      <div className={s.line}></div>
      <div className={s.tarifs}>
        <div className={s.years}>
          <div className={s.title}>Годовых</div>
          <span>{'до ' + interest_rate + ' %'}</span>
        </div>
        <div className={s.years}>
          <div className={s.title}>Срок</div>
          <span>{term_range?.min} - {term_range?.max} мес.</span>
        </div>
      </div>
    </div>
  );
};

export default DepositOfferItem;
