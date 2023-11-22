import React from 'react';
import { Metadata } from 'next';
import data from '@/core/data/index';
import DepositsPage from '@/screens/DepositsPage/DepositsPage';

export const metadata: Metadata = {
  title: 'Вклады',
};

export default async function Deposits() {
  return <DepositsPage staticData={data.DepositsPage} />;
}
