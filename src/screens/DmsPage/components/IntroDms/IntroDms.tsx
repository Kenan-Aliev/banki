import React from 'react';
import s from './IntroDms.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const IntroDms = () => {
  return (
    <div className={s.intro}>
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / Страхование / <mark>ДМС</mark>
        </div>
        <div className={s.title}>
          Добровольное медицинское
          <br /> страхование (ДМС)
        </div>
        <div className={s.sub}>Рассчитайте стоимость и купите полис ДМС онлайн.</div>
        <BlueBtn text={'Рассчитать стоимость'} width={260} />
      </div>
    </div>
  );
};

export default IntroDms;
