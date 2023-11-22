import React from 'react';
import s from './OurStrongsMort.module.scss';

const OurStrongsMort = () => {
  return (
    <div className={s.our_strongs}>
      <div className={s.info}>
        <div className={s.title}>
          В чём наши <mark>преимущества</mark>
        </div>
        <div className={s.strong_item}>
          <div className={s.title}>
            <span>01</span>
            <span>Высокие страховые суммы по программам</span>
          </div>
          <p>
            Поликлиника — 2 млн руб., экстренная стационарная помощь — 3 млн руб., стоматология — 1 млн руб.
          </p>
        </div>
        <div className={s.strong_item}>
          <div className={s.title}>
            <span>02</span>
            <span>Жителям Москвы доступен выбор сети клиник</span>
          </div>
          <p>
            «АВС-Медицина», «Он-Клиник» и «Он-Клиник Бейби», «Будь Здоров», «Поликлиника.ру»,
            <br /> АО «Медицина».
          </p>
        </div>
        <div className={s.strong_item}>
          <div className={s.title}>
            <span>03</span>
            <span>Возможность выбора дополнительных опций</span>
          </div>
          <p>
            Экстренная скорая и стационарная помощь,
            <br /> стоматология, аптека.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStrongsMort;
