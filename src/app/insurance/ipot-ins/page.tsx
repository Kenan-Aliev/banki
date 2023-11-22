import React from 'react';
import MortgageInsurancePage from '@/screens/MortgageInsurancePage/MortgageInsurancePage';
import data from '@/core/data/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ипотечное страхование',
};
const Page = () => <MortgageInsurancePage data={data.MortgageInsurancePage} />;

export default Page;
