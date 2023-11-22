import React from 'react';
import Wrapper from '@/containers/Wrapper';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import Navigation from '@/screens/RefinanceIpotekaPage/components/Navigation/Navigation';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import data from '@/core/data/index';
import Сompilations from '@/screens/RefinanceIpotekaPage/components/Сompilations/Сompilations';
import Question from '@/components/Question/Question';

export default function RefinanceIpotekaPage() {
  const dataMap = data.RefinanceIpotekaPage.questData;
  return (
    <Wrapper>
      <Navigation />
      <Сompilations />
      <Feedback title={'Отзывы '} sub={'об ипотеке'} />
      <FrequentQuestions title={'Важная информация'} items={dataMap} />
      <Question />
    </Wrapper>
  );
}
