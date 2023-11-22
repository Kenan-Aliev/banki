import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroRefinancing from '@/screens/RefinancingCredits/components/IntroRefinancing/IntroRefinancing';
import SliderBanksCons from '@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons';
import OurStrongs from '@/components/OurStrongs/OurStrongs';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { StaticImageData } from 'next/image';

type itemT = {
  title: string;
  sub: string;
  img: StaticImageData;
  text: string;
};
type quesT = {
  title: string;
  text: string;
};
type Props = {
  data: {
    sliderItems: StaticImageData[];
    ourData: itemT[];
    questData: quesT[];
  };
};

const RefinancingCredits = ({ data }: Props) => {
  return (
    <PageWrapper>
      <IntroRefinancing />
      <SliderBanksCons data={data.sliderItems} />
      <OurStrongs />
      <HowItWorks title={'Как работает '} sub={'сервис'} items={data.ourData} />
      <FrequentQuestions title={'Важные вопросы'} items={data.questData} />
    </PageWrapper>
  );
};

export default RefinancingCredits;
