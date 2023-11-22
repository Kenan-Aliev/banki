'use client';
import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroStockInvest from '@/screens/StocksInvestPage/components/IntroStockInvest/IntroStockInvest';
import data from '@/core/data/index';
import StockInvCalculate from '@/screens/StocksInvestPage/components/StockInvCalculate/StockInvCalculate';
import Bonus from '@/components/Bonus/Bonus';
import OffersStockInv from '@/screens/StocksInvestPage/components/OffersStockInv/OffersStockInv';
import s from './StocksInvestPage.module.scss';
import OffersInvest from '@/screens/InvestmentPage/components/OffersInvest/OffersInvest';
import Mailing from '@/components/Mailing/Mailing';
import LatestNews from '@/components/LatestNews/LatestNews';
import HaveQues from '@/components/HaveQues/HaveQues';
import BrokerList from '@/components/investment/BrokersList';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { brokersData } from '@/core/data/investment/brokers';
import { stockData } from '@/core/data/investment/stock';

const StocksInvestPage = () => {
  const brokers = brokersData;
  const stock = stockData;

  return (
    <PageWrapper>
      <IntroStockInvest items={data.StockInvest.chooseIntro} />
      <StockInvCalculate chooseD={data.StockInvest.calc_choose_d} />
      <Bonus
        title={'ВТБ Мои Инвестиции'}
        text={
          'Инвестиционная платформа №1. Большой выбор' +
          ' размещений, 10% годовых в облигациях российских компаний, консультации профессиональных управляющих'
        }
        height={166}
      />
      <OffersStockInv
        offers={stock}
        count={927}
        options={['По убыванию цены за акцию', 'По возрастанию цены за акцию']}
        isSelect={true}
      />
      <div className={s.text}>
        <p>
          Данные предоставлены ЗАО «Интерфакс». Данные предоставляются исключительно для целей ознакомления и
          не являются основанием для принятия финансовых и иных решений. Администрация сайта и ЗАО «Интерфакс»
          не несут никакой ответственности за любые ошибки, задержки в передаче данных или действия на основе
          этих данных.
        </p>
      </div>
      <OffersInvest items={data.StockInvest.offersMoth} />
      <HaveQues />
      <BrokerList title={'Все брокеры'} brokers={brokers} />
      <Mailing />
      <FrequentQuestions title={'Частые вопросы'} items={data.StockInvest.frequentQuests} />
      <LatestNews />
      <FrequentQuestions title={''} items={data.StockInvest.questions} />
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

export default StocksInvestPage;
