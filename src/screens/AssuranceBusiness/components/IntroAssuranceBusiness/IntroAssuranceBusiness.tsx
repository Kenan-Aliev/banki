import React from 'react';
import s from './IntroAssuranceBusiness.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const IntroAssuranceBusiness = () => {
  return (
    <div className={s.intro}>
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / Бизнес / <mark>Страхование для бизнеса</mark>
        </div>
        <div className={s.title}>
          Страхование юридических <br /> лиц
        </div>
        <div className={s.sub}>
          Рассчитайте стоимость полиса страхования недвижимости, жизни и здоровья при
          <br />
          ипотеке и оформите полис online за 5 минут
        </div>
        <BlueBtn text={'Рассчитать стоимость'} width={300} />
      </div>
    </div>
  );
};

export default IntroAssuranceBusiness;
