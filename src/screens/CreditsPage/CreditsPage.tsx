import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroCredits from '@/screens/CreditsPage/components/IntroCredits/IntroCredits';
import { StaticImageData } from 'next/image';
import OurPartners from '@/screens/CreditsPage/components/OurPartners/OurPartners';
import HowWorks from '@/screens/CreditsPage/components/HowWorks/HowWorks';
import { BankT } from '@/models/Banks/banks';

type Props = {
  sliderItems: BankT[];
};
const CreditsPage = ({ sliderItems }: Props) => {
  return (
    <PageWrapper>
      <IntroCredits />
      <OurPartners items={sliderItems} />
      <HowWorks />
    </PageWrapper>
  );
};

export default CreditsPage;
