import React from 'react';
import s from './SpecialOfferItem.module.scss';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import mockOfferImage from '@/assets/icons/offer_img1.png';
import mockBankImage from '@/assets/icons/banki_icon/dom.svg';
import { DepositItemT } from '@/models/Deposit/Deposit';
import { baseUrl } from '@/core/const/baseUrl';
import { Typography, Box } from '@mui/material';

interface SpecialOfferItemProps {
  item: DepositItemT;
}

const SpecialOfferItem = (props: SpecialOfferItemProps) => {
  const {
    item: { deposit_name, interest_rate, term_range, special_offer_details, bank_logo, bank_title },
  } = props;

  return (
    <div className={s.item}>
      <Image alt={'icon'} className={s.img} src={mockOfferImage} />
      <div className={s.item_info}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',

        }}>
          <Box sx={{
            width: '20%',
            height: '50px',
            "& img": {
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }
          }}>
            <Image alt={'icon'} src={baseUrl + bank_logo} width={50} height={50} />
          </Box>
          <Typography component='p'>{bank_title}</Typography>
        </Box>
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
