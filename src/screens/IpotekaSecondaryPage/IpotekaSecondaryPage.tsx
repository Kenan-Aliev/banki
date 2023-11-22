import React from 'react';
import Wrapper from '@/containers/Wrapper';
import Compilations from '@/screens/IpotekaSecondaryPage/components/Сompilations/Сompilations';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import data from '@/core/data/index';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import Navigation from '@/screens/IpotekaSecondaryPage/components/Navigation/Navigation';
import Question from '@/components/Question/Question';

export default function IpotekaSecondaryPage() {
  const dataMap = data.RefinanceIpotekaPage.questData;

  return (
    <Wrapper>
      <Navigation />
      <Compilations />
      <Feedback title={'Отзывы '} sub={'об ипотеке'} />
      <FrequentQuestions title={'Важная информация'} items={dataMap} />
      <Question />
    </Wrapper>
  );
}
