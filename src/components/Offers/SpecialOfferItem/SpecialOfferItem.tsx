'use client'

import React, { useState } from 'react';
import s from './SpecialOfferItem.module.scss';
import Image from 'next/image';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { DepositItemT } from '@/models/Deposit/Deposit';
import { baseUrl } from '@/core/const/baseUrl';
import { Typography, Box } from '@mui/material';
import Application from '@/components/Application/Application';
import SendApplicationSuccesModal from '@/components/SendApplicationSuccesModal';
import { models } from '@/core/data/applicationModels';
import { gtagEvent } from '@/core/config/gtagEvent';
import { usePathname } from 'next/navigation';

interface SpecialOfferItemProps {
  item: DepositItemT;
}

const SpecialOfferItem = (props: SpecialOfferItemProps) => {
  const {
    item: { deposit_name, interest_rate, term_range, special_offer_details, bank_logo, bank_title, deposit_id },
  } = props;

  const [applicationModal, setApplicationModal] = useState(false)
  const [succesModal, setSuccessModal] = useState(false)

  const pathname = usePathname().split('/').slice(1)

  const handleChangeApplicationModal = () => {
    setApplicationModal(!applicationModal)
  }

  const handleChangeSuccessModal = () => {
    setSuccessModal(!succesModal)
  }

  const onSuccessSendApplication = () => {
    handleChangeApplicationModal()
    handleChangeSuccessModal()
  }

  return (
    <div className={s.item}>
      <Application
        handleClose={handleChangeApplicationModal}
        open={applicationModal}
        modelId={deposit_id}
        onSuccessSendApplication={onSuccessSendApplication}
        bank_name={bank_title}
        product_name={deposit_name}
      />
      <SendApplicationSuccesModal
        open={succesModal}
        handleClose={handleChangeSuccessModal}
      />
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
        <BlueBtn
          text={'Оставить заявку'}
          width={230}
          height={40}
          fSize={16}
          onClick={() => {
            handleChangeApplicationModal()
            gtagEvent('click', models[pathname[0]].parentModel)
          }} />
      </div>
    </div>
  );
};

export default SpecialOfferItem;
