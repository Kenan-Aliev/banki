import React from 'react';
import s from './index.module.scss';
import Image from 'next/image';
import mockBankIcon from '@/assets/icons/banki_icon/loco.svg';
import { CreditItemT } from '@/models/Credits/Credits';

interface CreditOfferItemProps {
  item: CreditItemT;
}

const CreditOfferItem = (props: CreditOfferItemProps) => {
  const {
    item: { name, max_amount },
  } = props;

  return (
    <div className={s.offer_item}>
      <div className={s.inf}>
        <Image alt={'icon'} src={mockBankIcon} />
        <div className={s.info}>
          <div className={s.name}>{name}</div>
          <div className={s.subtitle}>{''}</div>
        </div>
      </div>
      <div className={s.line} />
      <div className={s.tarifs}>
        <div className={s.years}>
          <div className={s.title}>Годовых</div>
          <span>{'от ' + 'rate' + ' %'}</span>
        </div>
        <div className={s.years}>
          <div className={s.title}>Годовых</div>
          <span>до {(max_amount + (max_amount / 100) * 10) / 1000000} млн ₽</span>
        </div>
      </div>
    </div>
  );
};

export default CreditOfferItem;
