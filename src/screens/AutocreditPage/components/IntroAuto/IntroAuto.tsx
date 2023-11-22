'use client';

import React, { useState } from 'react';
import s from './IntroAuto.module.scss';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomInput from '@/UI/CustomInput/CustomInput';
import { Modal } from '@/UI/Modal';
import { ModalInnerWrapper } from '@/UI/ModalInnerWrapper';

const IntroAuto = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [many, setMany] = useState(0);
  const [bid, setBid] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [durationInYars, setDurationInYars] = useState(0);

  return (
    <>
      <div className={s.intro}>
        <div className={s.info_cont}>
          <div className={s.breadCrumbs}>
            Главная / Кредиты / <mark>Автокредиты</mark>
          </div>
          <div className={s.title}>Подобрать кредит на автомобиль</div>
          <p>Мастер персонального подбора кредитов на покупку автомобиля.</p>
          <div className={s.calc}>
            <MoneySelect width={385} setValue={(e) => setMany(e)} />
            <CustomInputTitle title={'Ставка'} width={188} value={12} setValue={(e) => setBid(e)} />
            <CustomInputTitle
              title={'Ежемесячный платеж'}
              width={188}
              setValue={(e) => setMonthlyPayment(e)}
            />
            <CustomInputTitle title={'Срок в годах'} width={385} setValue={(e) => setDurationInYars(e)} />
            <BlueBtn text={'Подобрать кредит'} width={385} onClick={() => setModalIsOpen(true)} />
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <Modal onClose={() => setModalIsOpen(false)}>
          <ModalInnerWrapper className={s.modal}>
            <CustomInput place='Имя' width={385} />
            <CustomInput place='Фамилия' width={385} />
            <CustomInput place='Номер телефона' width={385} />
            <MoneySelect width={385} value={many} />
            <CustomInputTitle title={'Ставка'} width={385} value={bid} />
            <CustomInputTitle title={'Ежемесячный платеж'} width={385} value={monthlyPayment} />
            <CustomInputTitle title={'Срок в годах'} width={385} value={durationInYars} />
            <BlueBtn
              text={'Отправить'}
              width={385}
              height={60}
              onClick={() => {
                alert('Данные отправлены!');
                setModalIsOpen(false);
              }}
            />
          </ModalInnerWrapper>
        </Modal>
      )}
    </>
  );
};

export default IntroAuto;
