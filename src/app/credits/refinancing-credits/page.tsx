import React from 'react';
import RefinancingCredits from '@/screens/RefinancingCredits/RefinancingCredits';
import { Metadata } from 'next';
import data from '@/core/data/index';
import BanksApi from '@/core/services/Banks';

export const metadata: Metadata = {
  title: 'Рефинансирование кредитов',
};

const Page = async () => {
  const banks = (await BanksApi.getBanks({ offset: 0, limit: 50, type: 'bank' })).data.results

  return <RefinancingCredits data={data.RefinancingCredits} sliderBanks={banks} />;
};

export default Page;
