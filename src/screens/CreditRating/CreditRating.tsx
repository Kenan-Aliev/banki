import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroCreditRating from '@/screens/CreditRating/components/IntroCreditRating/IntroCreditRating';
import ForWhat from '@/screens/CreditRating/components/ForWhat/ForWhat';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { StaticImageData } from 'next/image';

type workT = {
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
    worksData: workT[];
    questData: questT[];
  };
};

const CreditRating = ({ data }: Props) => {
  return (
    <PageWrapper>
      <IntroCreditRating />
      <ForWhat />
      <HowItWorks title={'Как работает'} sub={' сервис'} items={data.worksData} />
      <FrequentQuestions title={'Частые вопросы'} items={data.questData} />
    </PageWrapper>
  );
};

export default CreditRating;
