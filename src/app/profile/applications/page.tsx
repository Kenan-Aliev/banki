import React from 'react';
import ApplicationsProfile from '@/screens/ApplicationsProfile/ApplicationsProfile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мои заявки',
};
const Page = () => <ApplicationsProfile />;

export default Page;
