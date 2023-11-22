import React from 'react';
import NewAppealProfile from '@/screens/NewAppealProfile/NewAppealProfile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Новое обращение',
};

const Page = () => <NewAppealProfile />;

export default Page;
