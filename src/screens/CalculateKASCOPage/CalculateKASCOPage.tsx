'use client';
import Wrapper from '@/containers/Wrapper';
import data from '@/core/data/index';
import LastBuy from '@/components/LastBuy/LastBuy';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import CalculateOSAGO from '@/components/CalculateOSAGO/CalculateOSAGO';
import OSAGORating from '@/components/OSAGORating/OSAGORating';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import Question from '@/components/Question/Question';
import React, { useEffect } from 'react';
import Navigation from '@/screens/CalculateKASCOPage/components/Navigation/Navigation';
import InsuranceCompanys from '@/screens/InsurancePage/components/InsuranceCompanys/InsuranceCompanys';

export default function CalculateKASCOPage() {
  useEffect(() => {}, []);

  const dataMap = data.OSAGO.worksData;
  const question = data.OSAGO.favouritesQuestion;
  const info = data.OSAGO.info;
  const companies = data.InsurancePage.banksSlideItems;

  return (
    <Wrapper>
      <Navigation />
      <InsuranceCompanys isTitle={true} data={companies} />
      <LastBuy />
      <HowItWorks title={'Как оформить полис '} sub={'для ипотеки онлайн'} items={dataMap} />
      <LatestNews />
      <Feedback sub={'на КАСКО'} title={'Отзывы '} />
      <CalculateOSAGO />
      <OSAGORating title={'Рейтинг страховых компаний по ОСАГО '} sub={'- ТОП 10 лучших в 2023 году'} />
      <FrequentQuestions title={'Популярные вопросы'} items={question} />
      <FrequentQuestions title={'Важная информация'} items={info} />
      <Question />
    </Wrapper>
  );
}
