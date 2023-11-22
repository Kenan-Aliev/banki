import React from 'react';
import s from './OfferItem.module.scss';
import Image from 'next/image';
import mockBankIcon from '@/assets/icons/banki_icon/loco.svg';
import { DepositCardInterface } from '@/models/Deposit/Deposit';

interface OfferItemProps {
  item: DepositCardInterface;
}

const OfferItem = (props: OfferItemProps) => {
  const {
    item: { name, rate, timeframe_min, description },
  } = props;

  return (
    <div className={s.offer_item}>
      <div className={s.inf}>
        <Image alt={'icon'} src={mockBankIcon} />
        <div className={s.info}>
          <div className={s.name}>{name}</div>
          <div className={s.subtitle}>{description}</div>
        </div>
      </div>
      <div className={s.line}></div>
      <div className={s.tarifs}>
        <div className={s.years}>
          <div className={s.title}>Годовых</div>
          <span>{'до ' + rate + ' %'}</span>
        </div>
        <div className={s.years}>
          <div className={s.title}>Срок</div>
          <span>{timeframe_min + ' дн.'}</span>
        </div>
      </div>
    </div>
  );
};

export default OfferItem;
