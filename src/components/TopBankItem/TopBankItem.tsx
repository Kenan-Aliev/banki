'use client'

import React, { useState } from 'react';
import s from './TopBankItem.module.scss';
import { DepositItemT } from '@/models/Deposit/Deposit';
import { currencies } from '@/core/data/currency';
import { Button } from '@mui/material';
import Application from '../Application/Application';
import SendApplicationSuccesModal from '../SendApplicationSuccesModal';
import { usePathname } from 'next/navigation';
import { gtagEvent } from '@/core/config/gtagEvent';
import { models } from '@/core/data/applicationModels';

interface TopBankItemProps {
  item: DepositItemT;
}


const TopBankItem = (props: TopBankItemProps) => {
  const {
    item: { deposit_name, interest_rate, amount_range, term_range, currency, bank_title, deposit_id },
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

  const cur = currencies.find(c => c.value === currency)?.text

  return (
    <div className={s.item}>
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
      <div className={s.title}>
        <div>{bank_title}</div>
        <span>{deposit_name}</span>
      </div>
      <div className={s.info}>
        <div>Эффективная ставка</div>
        <span>до {interest_rate} %</span>
      </div>
      <div className={s.info}>
        <div>Срок</div>
        <span>{term_range.min} - {term_range.max} мес.</span>
      </div>
      <div className={s.info}>
        <div>Сумма</div>
        <span>
          {amount_range.max ? `${amount_range.min} — ${amount_range.max}` : `от ${amount_range.min}`} {cur}
        </span>
      </div>
      <Button
        variant='contained'
        onClick={() => {
          handleChangeApplicationForm()
          gtagEvent('click', models[pathname[0]].parentModel)
        }}
        sx={{
          backgroundColor: '#4DA7FF !important',
          "@media(max-width:600px)": {
            width: '100%'
          }
        }}>
        Открыть вклад
      </Button>
    </div>
  );
};

export default TopBankItem;
