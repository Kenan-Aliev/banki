'use client';

import React, { useState } from 'react';
import s from './IntroMortgage.module.scss';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import ChoiseItemsMap from '@/components/Choise/ChoiseItemsMap/ChoiseItemsMap';
import CustomBtnChange from '@/UI/CustomBtnChange/CustomBtnChange';
import CustomCheckboxAround from '@/UI/CustomCheckboxAround/CustomCheckboxAround';

type ItemT = {
  name: string;
  active: boolean;
};
type Props = {
  items: ItemT[];
  setActive?: React.Dispatch<React.SetStateAction<string>>;
  current?: string;
};

const IntroMortgage = ({ items, current, setActive }: Props) => {
  const [currentCheckbox, setCurrentCheckbox] = useState<string>('Есть 1 ребёнок после 2018 года');
  const [money, setMoney] = useState<number>(100);
  const [firstMoney, setFirstMoney] = useState<number>(100);
  const [years, setYears] = useState<string>('10');

  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / <mark>Ипотека</mark>
        </div>
        <div className={s.title}>
          Ипотека <mark>в Бишкеке</mark>
        </div>
        <div className={s.sub}>
          На (НАЗВАНИЕ СЕРВИСА) можно с легкостью подобрать ипотечный кредит и оформить онлайн-заявку. Вы
          получите ипотеку на самых выгодных условиях*. У нас большая база ипотечных предложений от разных
          банков. Также на сайте вы найдете отзывы реальных клиентов и заключения экспертов (НАЗВАНИЕ СЕРВИСА)
          с описанием преимуществ и недостатков каждого предложения. Это позволит найти подходящий ипотечный
          кредит и быть уверенным в своем выборе!
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap currentChoise={current} setActive={setActive} choiseItems={items} />
        </div>
        <div className={s.info}>
          <div className={s.radioCont}>
            <div>
              <CustomCheckboxAround
                value={'Есть 1 ребёнок после 2018 года'}
                setValue={setCurrentCheckbox}
                current={currentCheckbox}
                type={'radio'}
              />
              Есть 1 ребёнок после 2018 года
            </div>
            <div>
              <CustomCheckboxAround
                type={'radio'}
                value={'2 ребёнка младше 18 лет'}
                current={currentCheckbox}
                setValue={setCurrentCheckbox}
              />
              2 ребёнка младше 18 лет
            </div>
          </div>
          <div className={s.inpCont}>
            <CustomInputTitle title={'Стоимость жилья, ₽'} value={money} setValue={setMoney} width={385} />
            <CustomBtnChange title={'Параметры'} />
            <CustomInputTitle
              title={'Первоначальный взнос, ₽'}
              value={firstMoney}
              setValue={setFirstMoney}
              width={385}
            />
            <BlueBtn text={'Подобрать'} width={173} />
            <CustomWhiteSelectTitle
              value={years}
              setValue={setYears}
              title={'Срок в годах'}
              options={['10', '15', '20']}
              width={385}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroMortgage;
