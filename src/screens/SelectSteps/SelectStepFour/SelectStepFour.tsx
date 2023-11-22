import React from 'react';
import s from './SelectStepFour.module.scss';
import Image from 'next/image';
import indicator from '@/assets/icons/Индикатор4.svg';
import CustomSelectItemInp from '@/UI/CustomSelectItemInp/CustomSelectItemInp';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import WhiteBorderBlueBtn from '@/UI/WhiteBorderBlueBtn/WhiteBorderBlueBtn';
import Link from 'next/link';

const SelectStepFour = () => {
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
          <div className={s.title}>Насколько вам важен банк?</div>
          <div className={`${s.cont} ${s.cont_f}`}>
            <CustomSelectItemInp title={'Смотрю только известные'} selected={false} />
            <CustomSelectItemInp title={'Без разницы'} selected={true} />
          </div>
        </div>
        <div className={s.btn_cont}>
          <Link href={'/cards/select-steps/final'}>
            <BlueBtn text={'Продолжить'} width={240} />
          </Link>
          <Link href={'/cards/select-steps/three'}>
            <WhiteBorderBlueBtn text={'Назад'} width={124} height={60} fz={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectStepFour;
