import React from 'react';
import InsurancePage from '@/screens/InsurancePage/InsurancePage';
import data from '@/core/data/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Страхование',
};
const Page = () => <InsurancePage data={data.InsurancePage} SearchItems={data.InsuranceCompanysMass} />;

export default Page;
