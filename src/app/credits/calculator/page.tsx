import React from 'react';
import CalculatorCredits from '@/screens/CalculatorCredits/CalculatorCredits';
import { Metadata } from 'next';
import data from '@/core/data/index';

export const metadata: Metadata = {
  title: 'Кредитный калькулятор',
};

export default async function CreditsCalculator() {
  return <CalculatorCredits staticData={data.CalculateCredit} allOffers={data.ConsumerCredits.creditsAll} />;
}
