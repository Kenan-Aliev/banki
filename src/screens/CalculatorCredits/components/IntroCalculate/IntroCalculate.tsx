import React from 'react';
import s from './IntroCalculate.module.scss';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';
import Image from 'next/image';
import opt from '@/assets/icons/Tuning_icon.svg';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';

const IntroCalculate = () => {
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Кредиты / <mark>Кредитный калькулятор</mark>
        </div>
        <div className={s.title}>Кредитный калькулятор</div>
        <p>
          Калькулятор кредита позволяет рассчитать и сравнить предложения по размеру ежемесячного платежа,
          сумме переплаты и процентной ставке.
        </p>
        <div className={s.calc}>
          <MoneySelect width={385} />
          <div className={s.optionBtn}>
            <Image alt={'opt'} src={opt} />
            График платежей
          </div>
          <CustomWhiteSelectTitle title={'Срок'} options={['1 год']} width={385} />
          <BlueBtn text={'Подобрать'} width={241} />
        </div>
      </div>
    </div>
  );
};

export default IntroCalculate;
