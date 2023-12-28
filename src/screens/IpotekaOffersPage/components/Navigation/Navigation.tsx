'use client'

import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Application from '@/components/Application/Application';
import { Grid } from '@mui/material';

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
        productType='mortgage'
      />
      <div className={styles.navigation_container}>
        <p>Главная</p>
        <p>/</p>
        <p>Ипотека</p>
        <p>/</p>
        <p className={styles.grey}>Мастер подбора ипотеки</p>
      </div>
      <div className={styles.text_Container_main}>
        <p className={styles.main_text}>Мастер подбора ипотеки</p>
        <p className={styles.text}>
          Заполните одну анкету и получите лучшие предложения от банков по ипотеке.
        </p>
      </div>
      <Grid container>
        <Grid item xs={12} lg={3} xl={3}>
          <BlueBtn
            text={'Подобрать ипотеку'}
            onClick={handleChangeApplicationModal}
          />
        </Grid>
      </Grid>

    </div>
  );
};

export default Navigation;
