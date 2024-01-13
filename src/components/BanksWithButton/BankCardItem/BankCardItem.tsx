'use client'

import React, { useState } from 'react';
import styles from './BankCardItem.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import { CardItemT } from '@/models/Cards/Cards';
import { currencies } from '@/core/data/currency';
import Application from '@/components/Application/Application';

interface BankCardItemProps {
  item: CardItemT;
}

const BankCardItem = (props: BankCardItemProps) => {
  const {
    item: { bank_title, name, interest_rate, service_fee, credit_limit, currency, id },
  } = props;

  const [applicationModal, setApplicationModal] = useState(false)

  const cur = currencies.find((c) => c.value.toLowerCase() == currency?.toLowerCase())?.text

  const handleChangeApplicationForm = () => {
    setApplicationModal(!applicationModal)
  }
  return (
    <div className={styles.main_container}>
      <Application
        open={applicationModal}
        handleClose={handleChangeApplicationForm}
        productId={id}
        productType='credit-card' />
      <div className={styles.text_container}>
        {bank_title}
        <span>{name}</span>
      </div>
      <div className={styles.period_container}>
        <p className={styles.blue_text}>
          Процентная ставка
        </p>
        <p className={styles.text}>{interest_rate} %</p>
      </div>
      <div className={styles.time_container}>
        <p className={styles.blue_text}>Обслуживание</p>
        <p className={styles.text}>
          {service_fee.free ? 'Бесплатное' : `${service_fee.cost} ${cur}`}
        </p>
      </div>
      <div className={styles.bonus_container}>
        <p className={styles.blue_text}>
          Кредитный лимит
        </p>
        <p className={styles.text}>
          {credit_limit} {cur}
        </p>
      </div>
      <BlueBtn text={'Оформить'} width={180} height={60} fSize={20} onClick={handleChangeApplicationForm} />
    </div>
  );
};

export default BankCardItem;
