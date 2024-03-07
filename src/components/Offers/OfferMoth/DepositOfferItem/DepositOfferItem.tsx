'use client'

import React, { useState } from 'react';
import s from './DepositOfferItem.module.scss';
import Image from 'next/image';
import mockBankIcon from '@/assets/icons/banki_icon/loco.svg';
import { DepositItemT } from '@/models/Deposit/Deposit';
import { baseUrl } from '@/core/const/baseUrl';
import { Button } from '@mui/material';
import { usePathname } from 'next/navigation';
import Application from '@/components/Application/Application';
import SendApplicationSuccesModal from '@/components/SendApplicationSuccesModal';
import { models } from '@/core/data/applicationModels';
import { gtagEvent } from '@/core/config/gtagEvent';

interface OfferItemProps {
  item: DepositItemT;
}

const DepositOfferItem = (props: OfferItemProps) => {
  const {
    item: { deposit_name, interest_rate, term_range, bank_title, bank_logo, deposit_id },
  } = props;

  const [openApplicationForm, setOpenApplicationForm] = useState(false)
  const [succesModal, setSuccessModal] = useState(false)
  const pathname = usePathname().split('/').slice(1)


  const handleChangeApplicationForm = () => {
    setOpenApplicationForm(!openApplicationForm)
  }

  const handleChangeSuccessModal = () => {
    setSuccessModal(!succesModal)
  }

  const onSuccessSendApplication = () => {
    handleChangeApplicationForm()
    handleChangeSuccessModal()
  }

  return (
    <div className={s.offer_item}>
      <Application
        open={openApplicationForm}
        handleClose={handleChangeApplicationForm}
        onSuccessSendApplication={onSuccessSendApplication}
        modelId={deposit_id}
        bank_name={bank_title}
        product_name={deposit_name}
      />
      <SendApplicationSuccesModal
        open={succesModal}
        handleClose={handleChangeSuccessModal}
      />
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
      <Button
        fullWidth
        variant='contained'
        onClick={() => {
          handleChangeApplicationForm()
          gtagEvent('click', models[pathname[0]].parentModel)
        }}
        sx={{
          mt: '20px',
          backgroundColor: '#4DA7FF !important',
        }}>
        Открыть вклад
      </Button>
    </div>
  );
};

export default DepositOfferItem;
