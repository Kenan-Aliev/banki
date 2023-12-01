import React from 'react';
import CreditsPage from '@/screens/CreditsPage/CreditsPage';
import data from '@/core/data/index';
import { Metadata } from 'next';
import BanksApi from '@/core/services/Banks';

export const metadata: Metadata = {
  title: 'Кредиты',
};
const Page = async () => {
  const banks = (await BanksApi.getBanks({ page: 1, limit: 50, type: 'bank' })).data.banks

  return <CreditsPage sliderItems={banks} />;
}

export default Page;
