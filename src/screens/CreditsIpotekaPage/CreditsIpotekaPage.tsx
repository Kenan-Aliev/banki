import Bonus from '@/components/Bonus/Bonus';
import Mailing from '@/components/Mailing/Mailing';
import OffersMonth from '@/components/OffersMonth/OffersMonth';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import Communicate from '@/components/Communicate/Communicate';
import Compilations from '@/screens/CreditsIpotekaPage/components/Сompilations/Compilations';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import React from 'react';
import data from '@/core/data/index';
import Banks from '@/components/Banks/Banks';
import IntroMortgage from '@/screens/MortgagePage/components/IntroMortgage/IntroMortgage';
import PageWrapper from '@/containers/PageWrapper';

export default function CreditsIpotekaPage() {
  const dataMap = data.CreditsIpotekaPage.questData;
  const items = data.MortgagePage.choices;
  return (
    <PageWrapper>
      <IntroMortgage items={items} />
      <Bonus />
      <Banks />
      <Mailing />
      <Compilations />
      <OffersMonth />
      <LatestNews />
      <Communicate />
      <Feedback title={'Отзывы'} sub={'об ипотеке'} />
      <FrequentQuestions title={''} items={dataMap} />
    </PageWrapper>
  );
}
