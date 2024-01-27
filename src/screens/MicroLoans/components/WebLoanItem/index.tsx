'use client'

import React, { useState } from 'react';
import s from './index.module.scss';
import Image from 'next/image';
import warn from '@/assets/icons/warning_icon.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { CreditItemT } from '@/models/Credits/Credits';
import { baseUrl } from '@/core/const/baseUrl';
import { currencies } from '@/core/data/currency';
import CreditInfoModal from '@/components/credits/CreditInfoModal';
import Application from '@/components/Application/Application';

interface WebLoanItemProps {
  item: CreditItemT;
}

const WebLoanItem = (props: WebLoanItemProps) => {
  const {
    item: { id, loanName, loan_amount, loan_term, bank_logo, bank_title, currency, min_rating, max_rating, bank },
  } = props;

  const [infoModal, setInfoModal] = useState(false)
  const [applicationModal, setApplicationModal] = useState(false)

  const cur = currencies.find((c) => c.value == currency)?.text

  const handleChangeInfoModal = () => {
    setInfoModal(!infoModal)
  }

  const handleChangeApplicationModal = () => {
    setApplicationModal(!applicationModal)
  }

  return (
    <div className={s.wrapper}>
      {
        infoModal && <CreditInfoModal
          open={infoModal}
          handleClose={handleChangeInfoModal}
          bank={{
            id: bank,
            name: bank_title
          }}
          loan={{
            id,
            name: loanName
          }}
        />
      }
      <Application
        handleClose={handleChangeApplicationModal}
        open={applicationModal}
        productId={id}
        productType='microloan'
      />
      <div className={s.header}>
        <Image alt={''} src={baseUrl + bank_logo} width={50} height={50} />
        <div className={s.info}>
          <div className={s.title}>{bank_title}</div>
          <div className={s.sub}>{loanName}</div>
        </div>
      </div>
      <div className={s.line} />
      <div className={s.of_info}>
        <div>
          <span>Сумма</span>
          <span>
            {loan_amount?.min} - {loan_amount?.max} {cur}
          </span>
        </div>
        <div>
          <span>Срок</span>
          <span>
            {loan_term?.min} - {loan_term?.max} мес.
          </span>
        </div>
        <div>
          <span>Ставка</span>
          <span>{min_rating} - {max_rating}%</span>
        </div>
      </div>
      <div className={s.line}></div>
      <div className={s.btn_cont}>
        <div className={s.warn} onClick={handleChangeInfoModal}>
          <Image alt={'warning'} src={warn} />
        </div>
        <BlueBtn
          text='Получить деньги'
          height={40}
          width={183}
          fSize={16}
          onClick={handleChangeApplicationModal} />
      </div>
    </div>
  );
};

export default WebLoanItem;
