import React from 'react';
import SelectBrokerInv from '@/screens/SelectBrokerInv/SelectBrokerInv';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Подбор брокера',
};
const Page = () => <SelectBrokerInv />;

export default Page;
