'use client';

import Wrapper from '@/containers/Wrapper';
import Navigation from '@/screens/SpecialCardsOfffersPage/components/Navigation/Navigation';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import React, { useEffect } from 'react';
import MortgageSpecialList from '@/components/mortgages/MortgageSpecialList';
import data from '@/core/data/index';

type questItem = {
  title: string;
  text: string;
};
interface SpecialMortgageOffersPageProps {
  staticData: {
    questData: questItem[];
  };
}
export default function SpecialMortgageOffersPage(props: SpecialMortgageOffersPageProps) {
  const { staticData } = props;

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Navigation data={data.MortgageSpecialIntro} />
      <MortgageSpecialList mortgages={[]} />
      <FrequentQuestions title={'Частые вопросы'} items={staticData.questData} />
    </Wrapper>
  );
}
