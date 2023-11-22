import React from 'react';
import FondsInv from '@/screens/FondsInv/FondsInv';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Фонды',
};
const Page = () => <FondsInv />;

export default Page;
