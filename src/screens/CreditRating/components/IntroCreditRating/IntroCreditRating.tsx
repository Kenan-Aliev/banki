'use client'

import React, { useState } from 'react';
import s from './IntroCreditRating.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Application from '@/components/Application/Application';
import SendApplicationSuccesModal from '@/components/SendApplicationSuccesModal';

const IntroCreditRating = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [succesModal, setSuccessModal] = useState(false)


  const handleChangeIsModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleChangeSuccessModal = () => {
    setSuccessModal(!succesModal)
  }

  const onSuccessSendApplication = () => {
    handleChangeIsModalOpen()
    handleChangeSuccessModal()
  }
  return (
    <div className={s.intro}>
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / Кредиты / <mark>Кредитный рейтинг</mark>
        </div>
        <h1 className={s.title}>
          Узнайте бесплатно свой
          <br /> кредитный рейтинг
        </h1>
        <div className={s.sub}>
          Узнайте вашу кредитоспособность с нашей бесплатной услугой на VseBanki.kg.
          <br />
          Оставьте заявку с вашими контактными данными,и наша команда экспертов
          <br />
          свяжется с вами для проведения бесплатного расчета вашего кредитного рейтинга.
          <br />
          Мы предлагаем индивидуализированный подход,
          <br />
          чтобы помочь вам улучшить свои шансы на получение кредита.
        </div>
        <BlueBtn text={'Рассчитать бесплатно'} width={300} onClick={handleChangeIsModalOpen} />
        <Application
          handleClose={handleChangeIsModalOpen}
          open={isModalOpen}
          onSuccessSendApplication={onSuccessSendApplication}
        />
        <SendApplicationSuccesModal
          open={succesModal}
          handleClose={handleChangeSuccessModal}
        />
      </div>
    </div>
  );
};

export default IntroCreditRating;
