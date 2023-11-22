import React from 'react';
import { Metadata } from 'next';
import CreditRating from '@/screens/CreditRating/CreditRating';
import data from '@/core/data/index';

export const metadata: Metadata = {
  title: 'Кредитный рейтинг',
};

const Page = () => <CreditRating data={data.CreditRating} />;

export default Page;
