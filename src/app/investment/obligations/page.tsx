import React from 'react';
import ObligationsInv from '@/screens/ObligationsInv/ObligationsInv';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Облигации',
};
const Page = () => <ObligationsInv />;

export default Page;
