import Wrapper from '@/containers/Wrapper';
import OurStrongs from '@/components/OurStrongs/OurStrongs';
import React from 'react';
import Navigation from '@/screens/MasterCardsPage/components/Navigation/Navigation';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import data from '@/core/data/index';
import HowItWorks from '@/components/HowItWorks/HowItWorks';

export default function MasterCardsPage() {
  const itWorksMap = data.SelectCardsPage.ourData;
  const dataMap = data.SelectCardsPage.questData;
  return (
    <Wrapper>
      <Navigation />
      <HowItWorks title={'Как работает '} sub={'сервис'} items={itWorksMap} />
      <OurStrongs />
      <FrequentQuestions title={'Важная информация'} items={dataMap} />
    </Wrapper>
  );
}
