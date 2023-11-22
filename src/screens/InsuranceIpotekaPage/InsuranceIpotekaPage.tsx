import Wrapper from '@/containers/Wrapper';
import Bonus from '@/components/Bonus/Bonus';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import data from '@/core/data/index';
import OurStrongs from '@/components/OurStrongs/OurStrongs';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import React from 'react';
import Navigation from '@/screens/InsuranceIpotekaPage/components/Navigation/Navigation';
import Company from '@/components/Company/Company';
import LastBuy from '@/components/LastBuy/LastBuy';

export default function InsuranceIpotekaPage() {
  const dataMap = data.InsuranceIpoteka.ourData;
  const questionMap = data.InsuranceIpoteka.questData;
  return (
    <Wrapper>
      <Navigation />
      <Bonus />
      <Company />
      <LastBuy />
      <HowItWorks title={'Как оформить полис '} sub={'для ипотеки онлайн'} items={dataMap} />
      <OurStrongs />
      <LatestNews />
      <Feedback sub={'об ипотечном страховании'} title={'Отзывы'} />
      <FrequentQuestions title={''} items={questionMap} />
    </Wrapper>
  );
}
