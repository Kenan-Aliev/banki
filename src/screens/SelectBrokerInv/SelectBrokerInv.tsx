'use client';
import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroSelectBrokerInv from '@/screens/SelectBrokerInv/components/IntroSelectBrokerInv/IntroSelectBrokerInv';
import data from '@/core/data/index';
import CalculateBroker from '@/screens/SelectBrokerInv/components/CalculateBroker/CalculateBroker';
import Bonus from '@/components/Bonus/Bonus';
import BrokerList from '@/components/investment/BrokersList';
import HaveQues from '@/components/HaveQues/HaveQues';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import BrokerOffers from '@/components/investment/BrokerOffers';
import TopBrokers from '@/components/investment/TopBrokers';
import { brokersData } from '@/core/data/investment/brokers';

const SelectBrokerInv = () => {
  const brokers = brokersData;

  return (
    <PageWrapper>
      <IntroSelectBrokerInv items={data.BrokerInvPage.introChoose} />
      <CalculateBroker items={data.BrokerInvPage.chooseCalc} />
      <Bonus
        title={'ВТБ Мои Инвестиции'}
        height={166}
        text={
          'Инвестиционная платформа №1. Большой выбор размещений, 10% годовых' +
          ' в облигациях российских компаний, консультации профессиональных управляющих'
        }
      />
      <BrokerOffers brokers={brokers} title={`${brokers.length} брокера`} />
      <BrokerList title={'Все брокеры'} brokers={brokers} />
      <HaveQues />
      <FrequentQuestions title={'Частые вопросы'} items={data.BrokerInvPage.questions} />
      <TopBrokers brokers={brokers} />
      <FrequentQuestions title={''} items={data.BrokerInvPage.questionsD} />
    </PageWrapper>
  );
};

export default SelectBrokerInv;
