'use client'

import React, { useState } from 'react';
import s from './IntroConsumer.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Application from '@/components/Application/Application';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import Image from 'next/image';
import cust from '@/assets/icons/Tuning_icon.svg';
import CustomWhiteSelectTitle2 from '@/UI/CustomWhiteSelectTitle2/CustomWhiteSelectTitle2';
import { Stack } from '@mui/material';
import Filters from '../Filters/Filters';


const IntroConsumer = () => {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  const handleChangeApplicationModal = () => {
    setIsApplicationModalOpen(!isApplicationModalOpen)
  }

  const handleChangeFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen)
  }

  return (
    <div className={s.intro}>
      <Application
        open={isApplicationModalOpen}
        handleClose={handleChangeApplicationModal}
        productId={0}
        productType='credit' />

      <Filters open={isFilterModalOpen} handleClose={handleChangeFilterModal} />
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Кредиты / <mark>Потребительские кредиты</mark>
        </div>
        <h1 className={s.title}>Потребительские кредиты</h1>
        <p>
          На vsebanki.kg легко подобрать и получить потребительский кредит на любые цели. Больше вам не
          придется думать, как и где взять кредит с низкой ставкой.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          На 17.07.2023 доступно более 498 кредитов с минимальной для физических лиц на сайте vsebanki.kg.
          Вам остается только сравнить, выбрать самый выгодный вариант и оформить{' '}
          <mark>онлайн-заявку.</mark>
        </p>
        <BlueBtn text={'Оформить заявку'} width={248} onClick={handleChangeApplicationModal} />

        <div className={s.calculate}>
          <MoneySelect
            width={385}
            amount={0}
            currency={''}
            handleChange={() => { }}
            title='Сумма' />
          <div className={s.btnChange} onClick={handleChangeFilterModal}>
            <Image alt={'иконка настройки'} src={cust} />
            Фильтр
          </div>
          <Stack
            direction='row'
            sx={{
              gap: '10px',
              width: '100%',
              alignItems: 'center',
              "@media(max-width:640px)": {
                flexWrap: 'wrap'
              }
            }}
          >
            <CustomWhiteSelectTitle2
              value={0}
              items={[]}
              multiple={true}
              isAllExist={false}
              defaultValue={0}
              name='bank_id'
              onChange={() => { }}
              prop='bank_id'
              labelName='Банки'
            />
            <BlueBtn text={'Показать'}
              count={0}
              width={173}
              onClick={() => { }} />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default IntroConsumer;
