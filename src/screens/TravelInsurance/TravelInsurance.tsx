import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroTravel from '@/screens/TravelInsurance/components/IntroTravel/IntroTravel';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import { StaticImageData } from 'next/image';
import OurStrongsTravel from '@/screens/TravelInsurance/components/OurStrongsTravel/OurStrongsTravel';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';

type itemT = {
  title: string;
  sub: string;
  img: StaticImageData;
  text: string;
  w_text?: number;
};
type questT = {
  title: string;
  text: string;
};
type Props = {
  data: {
    worksData: itemT[];
    questData: questT[];
  };
};
const TravelInsurance = ({ data }: Props) => {
  return (
    <PageWrapper>
      <IntroTravel />
      <HowItWorks title={'Как купить '} sub={'туристическую страховку онлайн'} items={data.worksData} />
      <OurStrongsTravel />
      <Feedback title={'Отзывы '} sub={'о страховках для выезжающих за рубеж'} />
      <FrequentQuestions title={'Популярные вопросы'} items={data.questData} />
    </PageWrapper>
  );
};

export default TravelInsurance;
