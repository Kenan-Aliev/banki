import SpecialCardsOffersPage from '@/screens/SpecialCardsOfffersPage/SpecialCardsOffersPage';
import { Metadata } from 'next';
import data from '@/core/data/index';
import React from 'react';

export const metadata: Metadata = {
  title: 'Специальные предложения',
};

export default async function SpecialOffers() {
  return <SpecialCardsOffersPage staticData={data.SpecialOffersCards} />;
}
