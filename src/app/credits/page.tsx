import React from 'react';
import CreditsPage from '@/screens/CreditsPage/CreditsPage';
import data from '@/core/data/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кредиты',
};
const Page = () => <CreditsPage data={data.CreditsPage} />;

export default Page;
