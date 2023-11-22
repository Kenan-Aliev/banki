import React from 'react';
import s from './Intro.module.scss';
import MoneySelect from '@/UI/MoneySelect/MoneySelect';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomBtnChange from '@/UI/CustomBtnChange/CustomBtnChange';

const Intro = () => {
  return (
    <div className={s.pageIntro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Вклады / <mark>Накопительные счета</mark>
        </div>
        <div className={s.title}>
          Накопительные счета <mark>в Бишкеке</mark>
        </div>
        <p className={s.subtitle}>
          Открыть накопительный счет с процентной ставкой до 10% легче, чем вы думаете! Выбирайте из 82
          предложения от 56 банков, оформляйте депозит онлайн и получайте проценты.
        </p>
        <div className={s.calculate}>
          <MoneySelect width={385} />
          <CustomBtnChange title={'Фильтр'} />
          <CustomWhiteSelectTitle title={'Банк'} options={['Любой']} width={385} />
          <BlueBtn text={'Показать'} count={245} width={173} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
