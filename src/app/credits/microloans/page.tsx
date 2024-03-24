import React from 'react';
import MicroloansPage from '@/screens/MicroLoans';
import { Metadata } from 'next';
import data from '@/core/data/index';
import BanksApi from '@/core/services/Banks';
import CreditsApi from '@/core/services/Credits';

export const metadata: Metadata = {
  title: 'Микрозаймы',
};

export default async function Microloans(props: any) {
  const banks = (await BanksApi.getBanks({ offset: 0, limit: 50, type: 'mfo' })).data.results;
  const creditType = (await CreditsApi.getCreditTypes()).data.find((type) => type.title === 'Микрозаймы');

  return (
    <MicroloansPage
      staticData={data.MicroLoans}
      banks={banks}
      creditType={creditType}
      id={props.searchParams.id}
    />
  );
}
