import React from 'react';
import CryptoInv from '@/screens/CryptoInv/CryptoInv';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Криптовалюта',
};
const Page = () => <CryptoInv />;

export default Page;
