import React from 'react';
import { Metadata } from 'next';
import SelectStepOne from '@/screens/SelectSteps/SelectStepOne/SelectStepOne';

export const metadata: Metadata = {
  title: 'Подбор',
};

const Page = () => <SelectStepOne />;

export default Page;
