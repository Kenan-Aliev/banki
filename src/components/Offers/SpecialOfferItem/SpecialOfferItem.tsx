import React from 'react';
import s from './SpecialOfferItem.module.scss';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import mockOfferImage from '@/assets/icons/offer_img1.png';
import mockBankImage from '@/assets/icons/banki_icon/dom.svg';
import { DepositCardInterface, DepositItemT } from '@/models/Deposit/Deposit';

interface SpecialOfferItemProps {
  item: DepositItemT;
}

const SpecialOfferItem = (props: SpecialOfferItemProps) => {
  const {
    item: { deposit_name, interest_rate, term_range, special_offer_details },
  } = props;

  return (
    <div className={s.item}>
      <Image alt={'icon'} className={s.img} src={mockOfferImage} />
      <div className={s.item_info}>
        <Image alt={'icon'} src={mockBankImage} />
        <div className={s.name}>{deposit_name}</div>
        {/*TODO wait for api bonus*/}
        <div className={s.bonus}>
          {special_offer_details}
        </div>
        <div className={s.line} />
        <div className={s.info_more}>
          <div className={s.info_item}>
            <div className={s.title}>Ставка</div>
            <span>до {interest_rate}%</span>
          </div>
          {(term_range?.min || term_range?.max) && (
            <div className={s.info_item}>
              <div className={s.title}>Срок</div>
              <span>{term_range.min} - {term_range.max} дней</span>
            </div>
          )}
        </div>
        <BlueBtn text={'Посмотреть'} width={230} height={40} fSize={16} />
      </div>
    </div>
  );
};

export default SpecialOfferItem;
