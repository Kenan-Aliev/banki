'use client';

import React, { useState } from 'react';
import s from './IntroTravel.module.scss';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomInputDateTitle from '@/UI/CustomInputDateTitle/CustomInputDateTitle';

const IntroTravel = () => {
  const [dateOne, setDateOne] = useState<string>();
  const [dateTwo, setDateTwo] = useState<string>();

  return (
    <div className={s.page_info}>
      <div className={s.page_info_i}>
        <div className={s.pageName}>
          Главная / Страхование / <mark>Путешествия</mark>
        </div>
        <div className={s.title}>
          <mark>Туристическая страховка</mark>
          <br />
          для путешествий за границу
        </div>
        <div className={s.sub}>
          Онлайн страхование для выезжающих за рубеж: оформите медицинскую страховку для выезда и спокойного
          проживания за границей
        </div>
        <div className={s.calc}>
          <CustomWhiteSelectTitle title={'Куда'} width={295.5} options={[{
            text: 'Все страны Шенгена',
            value: 1
          }]} />
          <CustomWhiteSelectTitle title={'Туристы'} width={295.5} options={[{
            text: '30 лет',
            value: 30
          }]} />
          <CustomInputDateTitle value={dateOne} setValue={setDateOne} title={'Когда'} width={295.5} />
          <BlueBtn text={'Найти нужный вариант'} width={295.5} />
          <CustomInputDateTitle value={dateTwo} setValue={setDateTwo} title={'Выбрано дней'} width={295.5} />
        </div>
      </div>
    </div>
  );
};

export default IntroTravel;
