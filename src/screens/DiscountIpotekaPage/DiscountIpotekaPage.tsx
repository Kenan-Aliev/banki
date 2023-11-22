import Bonus from '@/components/Bonus/Bonus';
import OffersMonth from '@/components/OffersMonth/OffersMonth';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import React from 'react';
import Question from '@/components/Question/Question';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import data from '@/core/data/index';
import Items from '@/screens/DiscountIpotekaPage/components/Items/Items';
import IntroMortgageDiscount from '@/screens/DiscountIpotekaPage/components/IntroMortgageDiscount/IntroMortgageDiscount';
import PageWrapper from '@/containers/PageWrapper';
import Mailing from '@/components/Mailing/Mailing';

const DiscountIpotekaPage = () => {
  const dataMap = data.DiscountIpotekaPage.questData;
  const chooseItems = data.MortgagePage.choices;

  return (
    <PageWrapper>
      <IntroMortgageDiscount items={chooseItems} />
      <Items />
      <Bonus />
      <OffersMonth />
      <Mailing />
      <Feedback title={'Отзывы '} sub={'об ипотеке'} />
      <FrequentQuestions title={'Важная информация'} items={dataMap} />
      <Question />
    </PageWrapper>
  );
};
export default DiscountIpotekaPage;
