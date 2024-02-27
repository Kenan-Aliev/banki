'use client';

import React, { useState } from 'react';
import s from './IntroRefinancing.module.scss';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Application from '@/components/Application/Application';
import SendApplicationSuccesModal from '@/components/SendApplicationSuccesModal';
import { gtagEvent } from '@/core/config/gtagEvent';
import { models } from '@/core/data/applicationModels';
import { usePathname } from 'next/navigation';

const IntroRefinancing = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [succesModal, setSuccessModal] = useState(false)
  const [many, setMany] = useState(0);
  const [target, setTarget] = useState('');
  const [durationInYars, setDurationInYars] = useState(0);
  const [manySet, setManнSet] = useState('');
  const [bid, setBid] = useState(0);
  const [monthMany, setMonthMany] = useState(0);
  const pathname = usePathname().split('/').slice(1)


  const handleChangeApplicationModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleChangeSuccessModal = () => {
    setSuccessModal(!succesModal)
  }

  const onSuccessSendApplication = () => {
    handleChangeApplicationModal()
    handleChangeSuccessModal()
  }
  return (
    <>
      <div className={s.intro}>
        <div className={s.info_cont}>
          <div className={s.breadCrumbs}>
            Главная / Кредиты / <mark>Рефинансирование кредитов</mark>
          </div>
          <div className={s.title}>
            <mark>Рефинансирование кредитов</mark>
            <br />
            других банков
          </div>
          <div className={s.sub}>
            Персональный подбор кредитов на погашение задолженности в других банках.
          </div>
          <div className={s.funcs}>
            <div className={s.left}>
              <CustomWhiteSelectTitle
                width={385}
                title={'Цель'}
                options={[{
                  text: 'Рефинансирование кредита',
                  value: 1
                }]}
              // setValue={(e) => setTarget(e)}
              />
              <MoneySelect width={385} />
              <CustomWhiteSelectTitle
                width={385}
                title={'Сумма выплат в месяц'}
                options={[{
                  text: '10 000',
                  value: 10000
                }]}
              // setValue={(e) => setManнSet(e)}
              />
              <CustomInputTitle title={'Срок в годах'} width={385} setValue={(e) => setDurationInYars(e)} />
            </div>
            <div className={s.right}>
              <CustomInputTitle title={'Ставка'} width={188} setValue={(e) => setBid(e)} />
              <CustomInputTitle title={'Ежемесячный платеж'} width={188} setValue={(e) => setMonthMany(e)} />
              <BlueBtn
                text={'Рефинансировать кредит'}
                width={385}
                onClick={() => {
                  handleChangeApplicationModal()
                  gtagEvent('click', models[pathname[0]].parentModel)
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Application
        open={modalIsOpen}
        handleClose={handleChangeApplicationModal}
        onSuccessSendApplication={onSuccessSendApplication}
      />
      <SendApplicationSuccesModal
        open={succesModal}
        handleClose={handleChangeSuccessModal}
      />
    </>
  );
};

export default IntroRefinancing;
