'use client';

import React, { useState } from 'react';
import s from './IntroInsuranceMort.module.scss';
import CustomWhiteSelectTitle from '@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle';
import CustomInputTitle from '@/UI/CustomInputTitle/CustomInputTitle';
import BlueBtn from '@/UI/BlueBtn/BlueBtn';
import CustomInput from '@/UI/CustomInput/CustomInput';
import CustomCheckboxAround from '@/UI/CustomCheckboxAround/CustomCheckboxAround';

const IntroInsuranceMort = () => {
  const [current, setCurrent] = useState<string>('Квартира');

  return (
    <div className={s.intro}>
      <div className={s.info_cont}>
        <div className={s.breadCrumbs}>
          Главная / <mark>Страхование</mark>
        </div>
        <div className={s.title}>
          <mark>Страхование</mark>
        </div>
        <div className={s.sub}>
          Выбирайте и сравнивайте предложения ведущих страховых компаний онлайн. Мы покажем цены,
          <br />
          условия и реальные отзывы клиентов. Сразу после оплаты направим на email электронный полис —<br />
          он имеет ту же юридическую силу, что и бумажный.
        </div>
        <div className={s.infoCont}>
          <div className={s.l}>
            <div className={s.cont_checks}>
              <div className={s.check}>
                <CustomCheckboxAround
                  value={'Квартира'}
                  current={current}
                  setValue={setCurrent}
                  checked={true}
                  type={'radio'}
                />
                Квартира
              </div>
              <div className={s.check}>
                <CustomCheckboxAround
                  value={'Жизнь'}
                  current={current}
                  setValue={setCurrent}
                  checked={false}
                  type={'radio'}
                />
                Жизнь
              </div>
              <div className={s.check}>
                <CustomCheckboxAround
                  value={'Квартира + жизнь'}
                  current={current}
                  setValue={setCurrent}
                  checked={false}
                  type={'radio'}
                />
                Квартира + жизнь
              </div>
              <div className={s.check}>
                <CustomCheckboxAround
                  value={'Квартира + жизнь1'}
                  current={current}
                  setValue={setCurrent}
                  checked={false}
                  type={'radio'}
                />
                Квартира + жизнь
              </div>
            </div>
            <div className={s.inps_cont}>
              <CustomWhiteSelectTitle width={385} title={'Банк, где у меня ипотека'} options={['Сбербанк']} />
              <BlueBtn text={'Показать цены'} width={173} />
              <CustomInputTitle title={'Остаток кредита'} width={385} />
              <CustomWhiteSelectTitle width={385} title={'Пол'} options={['Мужской']} />
              <CustomInput place={'Дата рождения'} width={385} />
            </div>
          </div>
          <div className={s.right}>
            <div className={s.name}>Здесь будут показаны ваши последние расчеты и оформленные полисы</div>
            <div className={s.btn}>Войти</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroInsuranceMort;
