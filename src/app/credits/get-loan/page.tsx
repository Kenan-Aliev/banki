import React from 'react';
import { Metadata } from 'next';
import GetLoan from '@/screens/GetLoan/GetLoan';
import data from '@/core/data/index';

export const metadata: Metadata = {
  title: 'Получить микрозайм',
};

const Page = () => <GetLoan data={data.GetLoan} />;

export default Page;
