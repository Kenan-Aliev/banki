import React from 'react';
import s from './IntroCreditRating.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const IntroCreditRating = () => {
  return (
    <div className={s.intro}>
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / Кредиты / <mark>Кредитный рейтинг</mark>
        </div>
        <div className={s.title}>
          Узнайте бесплатно свой
          <br /> кредитный рейтинг
        </div>
        <div className={s.sub}>
          (НАЗВАНИЕ СЕРВИСА) бесплатно рассчитает для вас кредитный рейтинг
          <br />
          на основе вашей кредитной истории.
        </div>
        <BlueBtn text={'Рассчитать бесплатно'} width={300} />
      </div>
    </div>
  );
};

export default IntroCreditRating;
