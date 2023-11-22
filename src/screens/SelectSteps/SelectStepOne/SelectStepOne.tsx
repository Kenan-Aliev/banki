import React from 'react';
import s from './SelectStepOne.module.scss';
import Image from 'next/image';
import indicator from '@/assets/icons/Индикатор.svg';
import CustomSelectItemInp from '@/UI/CustomSelectItemInp/CustomSelectItemInp';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import Link from 'next/link';

const SelectStepOne = () => {
  return (
    <div className={s.pageIntro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / <mark>Карты</mark>
        </div>
        <div className={s.title}>
          Подбор <mark>банковских карт</mark>
        </div>
        <Image src={indicator} alt={''} />
        <div className={s.select_cont}>
          <div className={s.title}>Какая карта вам нужна?</div>
          <div className={`${s.cont} ${s.cont_f}`}>
            <CustomSelectItemInp title={'Кредитная'} selected={false} />
            <CustomSelectItemInp title={'Кредитная'} selected={true} />
          </div>
          <div className={`${s.cont}`}>
            <CustomSelectItemInp title={'Совершать покупки'} selected={true} />
            <CustomSelectItemInp title={'Для переводов денег'} selected={false} />
            <CustomSelectItemInp title={'Совершать покупки'} selected={false} />
            <CustomSelectItemInp title={'Для переводов денег'} selected={false} />
          </div>
        </div>
        <Link href={'/cards/select-steps/two'}>
          <BlueBtn text={'Продолжить'} width={240} />
        </Link>
      </div>
    </div>
  );
};

export default SelectStepOne;
