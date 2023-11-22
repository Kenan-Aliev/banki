import React from 'react';
import DmsPage from '@/screens/DmsPage/DmsPage';
import data from '@/core/data/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ДМС',
};
const Page = () => <DmsPage data={data.DmsPage} />;

export default Page;
