import React from 'react';
import TravelInsurance from '@/screens/TravelInsurance/TravelInsurance';
import { Metadata } from 'next';
import data from '@/core/data/index';

export const metadata: Metadata = {
  title: 'Страховка / Путешествия',
};
const Page = () => <TravelInsurance data={data.TravelInsurance} />;

export default Page;
