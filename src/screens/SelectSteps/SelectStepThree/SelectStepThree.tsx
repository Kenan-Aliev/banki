import React from 'react';
import s from './SelectStepThree.module.scss';
import Image from 'next/image';
import indicator from '@/assets/icons/Индикатор3.svg';
import CustomSelectItemInp from '@/UI/CustomSelectItemInp/CustomSelectItemInp';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import WhiteBorderBlueBtn from '@/UI/WhiteBorderBlueBtn/WhiteBorderBlueBtn';
import Link from 'next/link';

const SelectStepThree = () => {
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
          <div className={s.title}>Какое вознаграждение по карте вам интересно?</div>
          <div className={`${s.cont} ${s.cont_f}`}>
            <CustomSelectItemInp title={'Кэшбэк рублями'} selected={false} />
            <CustomSelectItemInp title={'Бонусные баллы'} selected={true} />
          </div>
        </div>
        <div className={s.select_cont}>
          <div className={s.title} style={{ margin: '0' }}>
            Какое вознаграждение по карте вам интересно?
          </div>
          <div className={`${s.cont}`}>
            <CustomSelectItemInp title={'Повседневные траты'} selected={true} />
            <CustomSelectItemInp title={'Транспорт'} selected={false} />
            <CustomSelectItemInp title={'Дом и ремонт'} selected={false} />
            <CustomSelectItemInp title={'Шоппинг'} selected={false} />
          </div>
        </div>
        <div className={s.btn_cont}>
          <Link href={'/cards/select-steps/four'}>
            <BlueBtn text={'Продолжить'} width={240} />
          </Link>
          <Link href={'/cards/select-steps/two'}>
            <WhiteBorderBlueBtn text={'Назад'} width={124} height={60} fz={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectStepThree;
