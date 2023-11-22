import React from 'react';
import Wrapper from '@/containers/Wrapper';
import Compilations from '@/screens/IpotekaNewBuilding/components/Сompilations/Сompilations';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import data from '@/core/data/index';
import Navigation from '@/screens/IpotekaNewBuilding/components/Navigation/Navigation';
import Question from '@/components/Question/Question';

export default function IpotekaNewBuildingPage() {
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
