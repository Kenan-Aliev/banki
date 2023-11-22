import React from 'react';
import s from './OurStrongs.module.scss';

const OurStrongs = () => {
  return (
    <div className={s.our_strongs}>
      <div className={s.info}>
        <div className={s.title}>
          В чём наши <mark>преимущества</mark>
        </div>
        <div className={s.strong_item}>
          <div className={s.title}>
            <span>01</span>
            <span>Снижение финансовой нагрузки</span>
          </div>
          <p>Снижаем ежемесячный платеж и ставку по кредиту.</p>
        </div>
        <div className={s.strong_item}>
          <div className={s.title}>
            <span>02</span>
            <span>Удобство погашения</span>
          </div>
          <p>Объединяем несколько кредитов в один.</p>
        </div>
      </div>
    </div>
  );
};

export default OurStrongs;
