'use client'

import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Application from '@/components/Application/Application';
import { Grid } from '@mui/material';
import SendApplicationSuccesModal from '@/components/SendApplicationSuccesModal';
import { usePathname } from 'next/navigation';
import { gtagEvent } from '@/core/config/gtagEvent';
import { models } from '@/core/data/applicationModels';

const Navigation = () => {
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
    <div className={styles.main_container}>
      <Application
        handleClose={handleChangeApplicationModal}
        open={applicationModal}
        onSuccessSendApplication={onSuccessSendApplication}
      />
      <SendApplicationSuccesModal
        open={succesModal}
        handleClose={handleChangeSuccessModal}
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
            onClick={() => {
              handleChangeApplicationModal()
              gtagEvent('click', models[pathname[0]].parentModel)
            }}
          />
        </Grid>
      </Grid>

    </div>
  );
};

export default Navigation;
