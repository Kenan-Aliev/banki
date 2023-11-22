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

const IntroCredits = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [many, setMany] = useState(0);
  const [target, setTarget] = useState('');
  const [durationInYars, setDurationInYars] = useState('');

  return (
    <>
      <div className={s.intro}>
        <div className={s.info}>
          <div className={s.breadCrumbs}>
            Главная / <mark>Кредиты</mark>
          </div>
          <div className={s.title}>
            Найдем банк, где вам одобрят
            <br /> кредит по выгодной ставке
          </div>
          <div className={s.sub}>
            <Image src={clock} alt={''} />
            Получите онлайн-решение за 5 минут
          </div>
          <div className={s.calculate}>
            <MoneySelect width={385} setValue={(e) => setMany(e)} />
            <CustomWhiteSelectTitle
              title={'Срок в годах'}
              options={['3']}
              width={385}
              setValue={(e) => setDurationInYars(e)}
            />
            <CustomWhiteSelectTitle
              title={'Цель'}
              options={['Просто деньги']}
              width={385}
              setValue={(e) => setTarget(e)}
            />
            <BlueBtn text={'Продолжить'} width={385} height={60} onClick={() => setModalIsOpen(true)} />
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <Modal onClose={() => setModalIsOpen(false)}>
          <ModalInnerWrapper className={s.modal}>
            <CustomInput place='Имя' />
            <CustomInput place='Фамилия' />
            <CustomInput place='Номер телефона' />
            <MoneySelect width={385} value={many} />
            <CustomWhiteSelectTitle
              title={'Срок в годах'}
              options={['1', '2', '3', '4', '5']}
              width={385}
              value={durationInYars}
            />
            <CustomWhiteSelectTitle
              title={'Цель'}
              options={['Просто деньги', 'Не просто деньги']}
              width={385}
              value={target}
            />
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

export default IntroCredits;
