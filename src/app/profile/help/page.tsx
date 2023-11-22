import React from 'react';
import HelpProfile from '@/screens/HelpProfile/HelpProfile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Помощь',
};

const Page = () => <HelpProfile />;

export default Page;
