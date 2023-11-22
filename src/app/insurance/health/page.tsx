import React from 'react';
import HealthInsurance from '@/screens/HealthInsurance/HealthInsurance';
import data from '@/core/data/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Жизнь и здоровье',
};

const Page = () => <HealthInsurance data={data.HealthInsurance} items={data.InsuranceCompanysMass} />;

export default Page;
