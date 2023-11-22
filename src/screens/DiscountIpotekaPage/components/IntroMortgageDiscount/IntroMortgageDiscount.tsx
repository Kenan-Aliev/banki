'use client';

import React, { useState } from 'react';
import s from './IntroMortgageDiscount.module.scss';
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
};

const IntroMortgageDiscount = ({ items }: Props) => {
  const [currentCheckbox, setCurrentCheckbox] = useState<string>('Есть 1 ребёнок после 2018 года');
  // для чекбоксов сверху
  const [money, setMoney] = useState<number>(100);
  //Стоимость жилья
  const [firstMoney, setFirstMoney] = useState<number>(100);
  //Первый взнос
  const [years, setYears] = useState<string>('10');
  //Срок в годах
  const [currentButton, setCurrentButton] = useState<string>('Ипотека');
  //Выбранная кнопка
  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / Ипотека / <mark> Выбрать недвижимость</mark>
        </div>
        <div className={s.title}>
          Ипотека со скидкой от застройщиков
          <br />
          <mark>в Бишкеке</mark>
        </div>
        <div className={s.sub}>
          Ипотеку от застройщиков с выгодными условиями в 2023 можно выбрать онлайн на маркетплейсе (НАЗВАНИЕ
          СЕРВИСА).
          <br />
          <br />
          Мы собрали актуальную информацию по действующим кредитным программам — ставки, условия, доступные
          лимиты и многое другое. Принять решение помогут отзывы клиентов, рейтинги финансовых организаций и
          экспертные материалы.
        </div>
        <div className={s.ch_cont}>
          <ChoiseItemsMap currentChoise={currentButton} setActive={setCurrentButton} choiseItems={items} />
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

export default IntroMortgageDiscount;
