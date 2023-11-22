'use client';
import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroFondsInv from '@/screens/FondsInv/components/IntroFondsInv/IntroFondsInv';
import data from '@/core/data/index';
import StockInvCalculate from '@/screens/StocksInvestPage/components/StockInvCalculate/StockInvCalculate';
import Bonus from '@/components/Bonus/Bonus';
import s from './FondsInv.module.scss';
import Mailing from '@/components/Mailing/Mailing';
import HaveQues from '@/components/HaveQues/HaveQues';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import TopFonds from '@/screens/FondsInv/components/TopFonds/TopFonds';
import LatestNews from '@/components/LatestNews/LatestNews';
import OffersObligation from '../ObligationsInv/components/OffersObligation/OffersObligation';
import { obligationData } from '@/core/data/investment/obligation';

const FondsInv = () => {
  const obligation = obligationData;

  return (
    <PageWrapper>
      <IntroFondsInv items={data.FondsPage.chooseIntro} />
      <StockInvCalculate chooseD={data.FondsPage.calc_choose_d} />
      <Bonus
        text={
          'Инвестиционная платформа №1. Большой выбор размещений,' +
          ' 10% годовых в облигациях российских компаний, консультации профессиональных управляющих'
        }
        title={'ВТБ Мои Инвестиции'}
        height={166}
      />
      <OffersObligation
        changeTime={{
          time: new Date().toLocaleTimeString().slice(0, 5),
          date: new Date().toLocaleDateString(),
        }}
        offers={obligation}
        count={`${obligation.length} фондов`}
        options={['Доходность по возрастанию', 'Доходность по убыванию']}
      />

      {/* <OffersFonds
        offers={data.FondsPage.FondsOfferItems}
        count={'177 предложений'}
        options={['По доходности за год']}
      /> */}
      <div className={s.text}>
        <p>
          Данные предоставлены ЗАО «Интерфакс». Данные предоставляются исключительно для целей ознакомления и
          не являются основанием для принятия финансовых и иных решений. Администрация сайта и ЗАО «Интерфакс»
          не несут никакой ответственности за любые ошибки, задержки в передаче данных или действия на основе
          этих данных.
        </p>
      </div>
      <Mailing />
      <HaveQues />
      <FrequentQuestions title={'Частые вопросы'} items={data.FondsPage.frequentQuests} />
      <TopFonds fonds={data.FondsPage.TopFondsItems} />
      <LatestNews />
      <div className={s.text}>
        <h1 className={s.title}>Информация</h1>
        <p>
          Данная информация не является индивидуальной инвестиционной рекомендацией, и финансовые инструменты
          либо операции, упомянутые в ней, могут не соответствовать вашему инвестиционному профилю и
          инвестиционным целям (ожиданиям). Определение соответствия финансового инструмента либо операции
          вашим интересам, инвестиционным целям, инвестиционному горизонту и уровню допустимого риска является
          вашей задачей. ООО «Информационное агентство «Банки.ру» не несет ответственности за возможные убытки
          в случае совершения операций либо инвестирования в финансовые инструменты, упомянутые в данной
          информации, и не рекомендует использовать указанную информацию в качестве единственного источника
          информации при принятии инвестиционного решения. Данные предоставлены ЗАО «Интерфакс». Данные
          предоставляются исключительно для целей ознакомления и не являются основанием для принятия
          финансовых и иных решений. Администрация сайта и ЗАО «Интерфакс» не несут никакой ответственности за
          любые ошибки, задержки в передаче данных или действия на основе этих данных.
        </p>
      </div>
    </PageWrapper>
  );
};

export default FondsInv;
