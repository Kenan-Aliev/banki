'use client'

import React, { useState } from 'react';
import s from './IntroGetLoan.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Application from '@/components/Application/Application';

const IntroGetLoan = () => {
  const [applicationModalIsOpen, setApplicationModalIsOpen] = useState(false)

  const handleChangeApplicationModal = () => {
    setApplicationModalIsOpen(!applicationModalIsOpen)
  }
  return (
    <div className={s.intro}>
      <Application
        handleClose={handleChangeApplicationModal}
        open={applicationModalIsOpen}
      />
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / Кредиты / <mark>Кредитный рейтинг</mark>
        </div>
        <div className={s.title}>
          Сервис подбора <br />и выдачи займов
        </div>
        <div className={s.sub}>
          Получите деньги за 5 минут без справок и долгих проверок
          <br /> на сервисе vsebanki.kg. Заполните заявку и отправьте ее сразу
          <br /> во все проверенные МФО
        </div>
        <BlueBtn text={'Подобрать займ'} width={238} onClick={handleChangeApplicationModal} />
      </div>
    </div>
  );
};

export default IntroGetLoan;
