'use client';

import React, { useState } from 'react';
import s from './IntroCredits.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import Image from 'next/image';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';
import clock from '@/assets/icons/time.svg';
import { Modal } from '@/UI/Modal';
import { ModalInnerWrapper } from '@/UI/ModalInnerWrapper';
import CustomInput from '@/UI/CustomInput/CustomInput';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import Application from '@/components/Application/Application';

const IntroCredits = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChangeModal = () => {
    setModalIsOpen(!modalIsOpen)
  }
  return (
    <div className={s.intro}>
      <Application
        handleClose={handleChangeModal}
        open={modalIsOpen}
        productId={1}
        productType='credit-master'
      />
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / <mark>Кредиты</mark>
        </div>
        <h1 className={s.title}>
          Найдем банк, где вам одобрят
          <br /> кредит по выгодной ставке
        </h1>
        <h1 className={s.sub}>
          <Image src={clock} alt={''} />
          Получите онлайн-решение за 5 минут
        </h1>
        <div className={s.calculate}>
          <MoneySelect width={385} />
          <CustomInputTitle
            title='Срок в годах'
            type='number'
          />
          <CustomWhiteSelectTitle2
            items={[
              {
                text: 'На любые цели',
                value: ' На любые цели'
              },
              {
                text: 'Рефинансирование',
                value: 'Рефинансирование'
              },
              {
                text: 'Автокредит',
                value: 'Автокредит'
              }
            ]}
            defaultValue={''}
            isAllExist={true}
            name='sdf'
            onChange={() => { }}
            prop='fw'
            labelName='Цель'
          />
          <BlueBtn text={'Продолжить'} width={385} height={60} onClick={handleChangeModal} />
        </div>
      </div>
    </div>

  );
};

export default IntroCredits;
