import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroAuto from '@/screens/AutocreditPage/components/IntroAuto/IntroAuto';
import OurStrongAuto from '@/screens/AutocreditPage/components/OurStrongAuto/OurStrongAuto';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { StaticImageData } from 'next/image';

type ItemT = {
  img: StaticImageData;
  title: string;
  sub: string;
  text: string;
};
type questT = {
  title: string;
  text: string;
};
type Props = {
  data: {
    worksData: ItemT[];
    questData: questT[];
  };
};

const AutocreditPage = ({ data }: Props) => {
  return (
    <PageWrapper>
      <IntroAuto />
      <OurStrongAuto />
      <HowItWorks title={'Как работает'} sub={' сервис'} items={data.worksData} />
      <FrequentQuestions title={'Полезные советы'} items={data.questData} />
    </PageWrapper>
  );
};

export default AutocreditPage;
