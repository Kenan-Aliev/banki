import Wrapper from '@/containers/Wrapper';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import React from 'react';
import data from '@/core/data/index';
import Text from '@/screens/IpotekaOffersPage/components/Text/Text';
import Navigation from '@/screens/IpotekaOffersPage/components/Navigation/Navigation';
import OurStrongsBig from '@/screens/IpotekaOffersPage/components/OurStrongsBig/OurStrongsBig';

export default function IpotekaOffersPage() {
  const itWorksMap = data.SelectCardsPage.ourData;
  return (
    <Wrapper>
      <Navigation />
      <HowItWorks title={'Как работает '} sub={'сервис'} items={itWorksMap} />
      <OurStrongsBig />
      <Text />
    </Wrapper>
  );
}
