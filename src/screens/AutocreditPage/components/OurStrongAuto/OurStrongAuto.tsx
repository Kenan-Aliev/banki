import React from 'react';
import s from './OurStrongAuto.module.scss';
import OurItem from '@/components/OurItem/OurItem';

const OurStrongAuto = () => {
  return (
    <div className={s.our}>
      <div className={s.our_i}>
        <div className={s.title}>
          В чём наши <mark>преимущества</mark>
        </div>
        <OurItem
          numb={'01'}
          title={'Кредит без ограничений'}
          text={'Не требуется первоначальный взнос и залог автомобиля.'}
        />
        <OurItem
          numb={'02'}
          title={'Свобода выбора'}
          text={'Приобретение любого нового или подержанного автомобиля.'}
        />
        <OurItem numb={'03'} title={'Экономия в страховании'} text={'Покупка полиса КАСКО необязательна'} />
      </div>
    </div>
  );
};

export default OurStrongAuto;
