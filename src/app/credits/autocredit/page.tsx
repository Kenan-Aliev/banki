import React from 'react';
import { Metadata } from 'next';
import AutocreditPage from '@/screens/AutocreditPage/AutocreditPage';
import data from '@/core/data/index';
import CreditsApi from '@/core/services/Credits';

export const metadata: Metadata = {
  title: 'Автокредиты',
};

export default async function Microloans() {
  const creditType = (await CreditsApi.getCreditTypes()).data.find((type) => type.title === 'Автокредит')

  return <AutocreditPage data={data.Autocredits} creditType={creditType} />;
}

