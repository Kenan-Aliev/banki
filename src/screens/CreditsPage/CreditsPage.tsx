import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroCredits from '@/screens/CreditsPage/components/IntroCredits/IntroCredits';
import { StaticImageData } from 'next/image';
import OurPartners from '@/screens/CreditsPage/components/OurPartners/OurPartners';
import HowWorks from '@/screens/CreditsPage/components/HowWorks/HowWorks';

type Props = {
  data: {
    sliderItems: StaticImageData[];
  };
};
const CreditsPage = ({ data }: Props) => {
  return (
    <PageWrapper>
      <IntroCredits />
      <OurPartners items={data.sliderItems} />
      <HowWorks />
    </PageWrapper>
  );
};

export default CreditsPage;
