import React from 'react';
import s from './IntroGetLoan.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const IntroGetLoan = () => {
  return (
    <div className={s.intro}>
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / Кредиты / <mark>Кредитный рейтинг</mark>
        </div>
        <div className={s.title}>
          Сервис подбора <br />и выдачи займов
        </div>
        <div className={s.sub}>
          Выберите предложение и получите займ от понравившейся
          <br /> МФО прямо на (НАЗВАНИЕ СЕРВИСА)
        </div>
        <BlueBtn text={'Подобрать займ'} width={238} />
      </div>
    </div>
  );
};

export default IntroGetLoan;
