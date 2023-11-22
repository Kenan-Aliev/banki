import React from 'react';
import ConsumerCreditsPage from '@/screens/ConsumerCreditsPage/ConsumerCreditsPage';
import { Metadata } from 'next';
import data from '@/core/data/index';

export const metadata: Metadata = {
  title: 'Потребительские кредиты',
};

export default async function ConsumerCredits() {
  return <ConsumerCreditsPage staticData={data.ConsumerCredits} />;
}
