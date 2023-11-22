import React from 'react';
import SavingAccountsPage from '@/screens/SavingAccountsPage/SavingAccountsPage';
import { Metadata } from 'next';
import data from '@/core/data/index';

export const metadata: Metadata = {
  title: 'Накопительные счета',
};

export default async function SavingAccounts() {
  return <SavingAccountsPage staticData={data.DepositsPage} />;
}
