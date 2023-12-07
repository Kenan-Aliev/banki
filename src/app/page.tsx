import React from 'react';
import data from '@/core/data/index';
import { Metadata } from 'next';
import HomePage from '@/screens/HomePage/HomePage';
import BanksApi from '@/core/services/Banks';

export const metadata: Metadata = {
  title: 'Главная',
};

export default async function Home() {
  const banks = (await BanksApi.getBanks({ limit: 10, offset: 0, type: 'bank' })).data.results
  return <HomePage data={data.HomePage} banks={banks} />;
}
