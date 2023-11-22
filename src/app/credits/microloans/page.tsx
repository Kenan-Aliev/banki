import React from 'react';
import MicroloansPage from '@/screens/MicroLoans';
import { Metadata } from 'next';
import data from '@/core/data/index';

export const metadata: Metadata = {
  title: 'Микрозаймы',
};

export default async function Microloans() {
  return <MicroloansPage staticData={data.MicroLoans} />;
}
