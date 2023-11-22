import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroInvestSpecialOffer from '@/screens/InvestSpecialOffersPage/components/IntroInvestSpecialOffer/IntroInvestSpecialOffer';
import data from '@/core/data/index';
import InvestSpecialOffers from '@/screens/InvestSpecialOffersPage/components/InvestSpecialOffers/InvestSpecialOffers';
import StockOffersInvest from '@/screens/InvestSpecialOffersPage/components/StockOffersInvest/StockOffersInvest';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';

const InvestSpecialOffersPage = () => {
  return (
    <PageWrapper>
      <IntroInvestSpecialOffer choises={data.InvestSpecialOffersPage.choises} />
      <InvestSpecialOffers dataMap={data.InvestSpecialOffersPage.specialOffers} />
      <StockOffersInvest data={data.InvestSpecialOffersPage.stockOffers} />
      <FrequentQuestions title={'Частые вопросы'} items={data.SpecialOffer.questions.items} />
    </PageWrapper>
  );
};

export default InvestSpecialOffersPage;
