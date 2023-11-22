import React from 'react';
import { Metadata } from 'next';
import SpecialOffersPage from '@/screens/SpecialOffersPage/SpecialOffersPage';
import data from '@/core/data/index';

export const metadata: Metadata = {
  title: 'Специальные предложения',
};

export default async function SpecialOffers() {
  return <SpecialOffersPage staticData={data.SpecialOffer} />;
}
