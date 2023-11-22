import React from 'react';
import s from './SpecialOfferItem.module.scss';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import mockOfferImage from '@/assets/icons/offer_img1.png';
import mockBankImage from '@/assets/icons/banki_icon/dom.svg';
import { DepositCardInterface } from '@/models/Deposit/Deposit';

interface SpecialOfferItemProps {
  item: DepositCardInterface;
}

const SpecialOfferItem = (props: SpecialOfferItemProps) => {
  const {
    item: { name, rate, timeframe_min, timeframe_max, count2, count1, title_2, title_1 },
  } = props;

  return (
    <div className={s.item}>
      <Image alt={'icon'} className={s.img} src={mockOfferImage} />
      <div className={s.item_info}>
        <Image alt={'icon'} src={mockBankImage} />
        <div className={s.name}>{name}</div>
        {/*TODO wait for api bonus*/}
        <div className={s.bonus} style={{ height: '12px' }}>
          Бонус 500 ₽ за вклад
        </div>
        <div className={s.line} />
        <div className={s.info_more}>
          <div className={s.info_item}>
            <div className={s.title}>{title_1 || 'Ставка'}</div>
            <span>{count1 || `до ${rate}%`}</span>
          </div>
          {(count2 || timeframe_min || timeframe_max) && (
            <div className={s.info_item}>
              <div className={s.title}>{title_2 || 'Срок'}</div>
              <span>{count2 || `${timeframe_min} - ${timeframe_max} дней`}</span>
            </div>
          )}
        </div>
        <BlueBtn text={'Посмотреть'} width={230} height={40} fSize={16} />
      </div>
    </div>
  );
};

export default SpecialOfferItem;
