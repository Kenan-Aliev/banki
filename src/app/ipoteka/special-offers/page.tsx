import { Metadata } from 'next';
import SpecialMortgageOffersPage from '@/screens/SpecialMortgageOffersPage';
import data from '@/core/data/index';
import React from 'react';

export const metadata: Metadata = {
  title: 'Специальные предложения',
};

export default function SpecialOffers() {
  return <SpecialMortgageOffersPage staticData={data.SpecialOffersCards} />;
}
