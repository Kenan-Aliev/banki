import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroAnalyticsInv from '@/screens/AnalyticsInv/components/IntroAnalyticsInv/IntroAnalyticsInv';
import data from '@/core/data/index';
import Bonus from '@/components/Bonus/Bonus';
import QuoteInv from '@/screens/AnalyticsInv/components/QuoteInv/QuoteInv';
import LastRecommendsA from '@/screens/AnalyticsInv/components/LastRecommendsA/LastRecommendsA';
import LatestNews from '@/components/LatestNews/LatestNews';

const AnalyticsInv = () => {
  const text =
    'Инвестиционная платформа №1. Большой ' +
    'выбор размещений, 10% годовых в облигациях российских компаний, консультации профессиональных управляющих';

  return (
    <PageWrapper>
      <IntroAnalyticsInv items={data.CryptoPage.introChoose} />
      <Bonus text={text} title={'ВТБ Мои Инвестиции'} height={166} />
      <QuoteInv quoteItems={data.Analytics.quoteItems} />
      <LastRecommendsA title={'Последние рекомендации'} recommendItems={data.Analytics.lastRecommends} />
      <LatestNews />
    </PageWrapper>
  );
};

export default AnalyticsInv;
