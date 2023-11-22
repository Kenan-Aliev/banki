'use client';
import Wrapper from '@/containers/Wrapper';
import Navigation from '@/screens/SpecialCardsOfffersPage/components/Navigation/Navigation';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import React from 'react';
import OffersBanks from './components/OffersBanks/OffersBanks';
import { creditCards } from '@/core/data/cards/credit_cards';
import data from '@/core/data';
import { CreditCardT } from '@/models/Cards/Cards';

type questItem = {
  title: string;
  text: string;
};

interface SpecialCardsOffersPageProps {
  staticData: {
    questData: questItem[];
  };
}

export default function SpecialCardsOffersPage(props: SpecialCardsOffersPageProps) {
  const { staticData } = props;
  const staticCards: CreditCardT[] = creditCards;

  return (
    <Wrapper>
      <Navigation data={data.SpecialOffersCards.choises} />
      <OffersBanks cards={staticCards} />
      <FrequentQuestions title={'Частые вопросы'} items={staticData.questData} />
    </Wrapper>
  );
}
