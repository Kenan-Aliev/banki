import React from 'react';
import AssuranceBusiness from '@/screens/AssuranceBusiness/AssuranceBusiness';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Страхование для бизнеса',
};
const Page = () => <AssuranceBusiness />;

export default Page;
