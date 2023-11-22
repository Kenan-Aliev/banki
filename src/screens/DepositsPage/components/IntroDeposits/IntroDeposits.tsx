import React from 'react';
import s from './IntroDeposits.module.scss';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import Image from 'next/image';
import cust from '@/assets/icons/Tuning_icon.svg';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';

const IntroDeposits = () => {
  return (
    <div className={s.intro}>
      <div className={s.info}>
        <div className={s.breadCrumbs}>
          Главная / <mark>Вклады</mark>
        </div>
        <div className={s.title}>
          Вклады <mark>в Бишкеке</mark>
        </div>
        <div className={s.sub}>
          Сервис подбора вкладов и накопительных счетов позволяет быстро найти высокие процентные ставки,
          <mark>рассчитать доходность</mark> и <mark>открыть вклад онлайн</mark>. У нас самая полная база
          актуальных предложений на 29.06.2023, а также регулярные акции с повышенной ставкой только для
          пользователей (НАЗВАНИЕ СЕРВИСА).
        </div>
        <div className={s.calculate}>
          <MoneySelect width={385} />
          <div className={s.btnChange}>
            <Image alt={'иконка настройки'} src={cust} />
            Фильтр
          </div>
          <CustomWhiteSelectTitle title={'Банк'} options={['Любой']} width={385} />
          <BlueBtn text={'Показать'} count={245} width={173} />
        </div>
      </div>
    </div>
  );
};

export default IntroDeposits;
