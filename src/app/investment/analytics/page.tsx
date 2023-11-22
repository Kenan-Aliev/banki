import React from 'react';
import { Metadata } from 'next';
import AnalyticsInv from '@/screens/AnalyticsInv/AnalyticsInv';

export const metadata: Metadata = {
  title: 'Аналитика',
};

const Page = () => <AnalyticsInv />;

export default Page;
