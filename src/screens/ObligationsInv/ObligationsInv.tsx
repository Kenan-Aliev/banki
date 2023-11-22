'use client';
import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroObliagtionInvest from '@/screens/ObligationsInv/components/IntroObliagtionInvest/IntroObliagtionInvest';
import data from '@/core/data/index';
import StockInvCalculate from '@/screens/StocksInvestPage/components/StockInvCalculate/StockInvCalculate';
import Bonus from '@/components/Bonus/Bonus';
import OffersObligation from '@/screens/ObligationsInv/components/OffersObligation/OffersObligation';
import s from './ObligationsInv.module.scss';
import OffersInvest from '@/screens/InvestmentPage/components/OffersInvest/OffersInvest';
import HaveQues from '@/components/HaveQues/HaveQues';
import BrokerList from '@/components/investment/BrokersList';
import Mailing from '@/components/Mailing/Mailing';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import TopObligations from '@/screens/ObligationsInv/components/TopObligations/TopObligations';
import LatestNews from '@/components/LatestNews/LatestNews';
import { brokersData } from '@/core/data/investment/brokers';
import { obligationData } from '@/core/data/investment/obligation';

const ObligationsInv = () => {
  const brokers = brokersData;
  const obligation = obligationData;

  return (
    <PageWrapper>
      <IntroObliagtionInvest items={data.ObligationsPage.chooseIntro} />
      <StockInvCalculate chooseD={data.ObligationsPage.calc_choose_d} />
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
        count={`${obligation.length} облигации`}
        options={['Доходность по возрастанию', 'Доходность по убыванию']}
      />
      <div className={s.text}>
        <p>
          Данные предоставлены ЗАО «Интерфакс». Данные предоставляются исключительно для целей ознакомления и
          не являются основанием для принятия финансовых и иных решений. Администрация сайта и ЗАО «Интерфакс»
          не несут никакой ответственности за любые ошибки, задержки в передаче данных или действия на основе
          этих данных.
        </p>
      </div>
      <OffersInvest items={data.ObligationsPage.offersMoth} />
      <HaveQues />
      <BrokerList brokers={brokers} title={'Все брокеры'} />
      <Mailing />
      <FrequentQuestions title={'Частые вопросы'} items={data.ObligationsPage.frequentQuests} />
      <TopObligations obligations={obligation} />
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

export default ObligationsInv;
