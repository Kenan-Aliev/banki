import React from 'react';
import s from './IntroConsumer.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const IntroConsumer = () => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Кредиты / <mark>Потребительские кредиты</mark>
        </div>
        <div className={s.title}>Потребительские кредиты</div>
        <p>
          На (НАЗВАНИЕ СЕРВИСА) легко подобрать и получить потребительский кредит на любые цели. Больше вам не
          придется думать, как и где взять кредит с низкой ставкой.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          На 17.07.2023 доступно более 498 кредитов со ставкой от 2% для физических лиц на сайте (НАЗВАНИЕ
          СЕРВИСА). Вам остается только сравнить, выбрать самый выгодный вариант и оформить{' '}
          <mark>онлайн-заявку.</mark>
        </p>
        <BlueBtn text={'Оформить заявку'} width={248} />
      </div>
    </div>
  );
};

export default IntroConsumer;
