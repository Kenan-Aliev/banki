import React from 'react';
import { Metadata } from 'next';
import BanksPage from '@/screens/BanksPage/BanksPage';
import data from '@/core/data/index';

export const metadata: Metadata = {
  title: 'Банки Кыргызстане',
};
const Page = () => <BanksPage data={data.BanksPage} />;

export default Page;
