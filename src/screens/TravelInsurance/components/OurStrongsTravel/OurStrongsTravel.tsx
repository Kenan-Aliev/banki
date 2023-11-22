import React from 'react';
import s from './OurStrongsTravel.module.scss';

const OurStrongsTravel = () => {
  return (
    <div className={s.our_strongs}>
      <div className={s.info}>
        <div className={s.title}>
          В чём наши <mark>преимущества</mark>
        </div>
        <div className={s.strong_item}>
          <div className={s.title}>
            <span>01</span>
            <span>Минимум времени</span>
          </div>
          <p>От заполнения данных до получения полиса на email — всего пара минут.</p>
        </div>
        <div className={s.strong_item}>
          <div className={s.title}>
            <span>02</span>
            <span>100% гарантия подлинности</span>
          </div>
          <p>Оригинальные полисы для поездки в любую страну мира.</p>
        </div>
        <div className={s.strong_item}>
          <div className={s.title}>
            <span>03</span>
            <span>Выгодно и удобно</span>
          </div>
          <p>Предложения от 11 надежных страховых компаний в одном месте без комиссий и доплат.</p>
        </div>
      </div>
    </div>
  );
};

export default OurStrongsTravel;
