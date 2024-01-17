'use client'

import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Link from 'next/link';
import Application from '@/components/Application/Application';

const Navigation = () => {
  const [applicationModal, setApplicationModal] = useState(false)

  const handleChangeApplicationModal = () => {
    setApplicationModal(!applicationModal)
  }
  return (
    <div className={styles.main_container}>
      <Application
        handleClose={handleChangeApplicationModal}
        open={applicationModal}
        productId={0}
        productType='card'
      />
      <div className={styles.nav_container}>
        <p className={styles.text}>Главная</p>
        <p className={styles.text}>/</p>
        <p className={styles.text}>Карты</p>
        <p className={styles.text}>/</p>
        <p className={styles.grey_text}>Подбор карт</p>
      </div>
      <div className={styles.main_text_container}>
        <h1 className={styles.big_text}>Мастер подбора карт</h1>
        <p className={styles.text}>
          Подберите дебетовую или кредитную карту по вашим параметрам на vsebanki.kg
        </p>
      </div>
      <BlueBtn
        text={'Подобрать карту'}
        width={245}
        height={60}
        fSize={20}
        onClick={handleChangeApplicationModal}
      />
    </div>
  );
};

export default Navigation;
