import React from 'react';
import { Metadata } from 'next';
import StocksInvestPage from '@/screens/StocksInvestPage/StocksInvestPage';

export const metadata: Metadata = {
  title: 'Акции',
};
const Page = () => <StocksInvestPage />;

export default Page;
