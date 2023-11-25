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
            <MoneySelect width={385} />
            <CustomWhiteSelectTitle
              title={'Срок в годах'}
              options={[{ text: '3', value: 3 }]}
              width={385}
            // setValue={(e) => setDurationInYars(e)}
            />
            <CustomWhiteSelectTitle
              title={'Цель'}
              options={[{ text: 'Просто деньги', value: 1 }]}
              width={385}
            // setValue={(e) => setTarget(e)}
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
            <MoneySelect width={385} amount={many} />
            <CustomWhiteSelectTitle
              title={'Срок в годах'}
              options={[{
                value: 1,
                text: '1'
              },
              {
                value: 2,
                text: '2'
              },
              {
                value: 3,
                text: '3'
              },
              {
                value: 4,
                text: '4'
              },
              {
                value: 5,
                text: '5'
              }
              ]}
              width={385}
              value={durationInYars}
            />
            <CustomWhiteSelectTitle
              title={'Цель'}
              options={[{
                text: "Просто деньги",
                value: 1
              },
              {
                text: "Не просто деньги",
                value: 2
              }
              ]}
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
