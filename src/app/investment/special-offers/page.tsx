import React from 'react';
import { Metadata } from 'next';
import InvestSpecialOffersPage from '@/screens/InvestSpecialOffersPage/InvestSpecialOffersPage';

export const metadata: Metadata = {
  title: 'Специальные предложения',
};
const Page = () => <InvestSpecialOffersPage />;

export default Page;
