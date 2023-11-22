import React from 'react';
import { Metadata } from 'next';
import AutocreditPage from '@/screens/AutocreditPage/AutocreditPage';
import data from '@/core/data/index';

export const metadata: Metadata = {
  title: 'Автокердит',
};

const Page = () => <AutocreditPage data={data.Autocredits} />;

export default Page;
