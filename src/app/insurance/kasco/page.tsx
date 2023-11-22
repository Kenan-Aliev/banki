import React from 'react';
import CalculateKASCOPage from '@/screens/CalculateKASCOPage/CalculateKASCOPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'КАСКО',
};

export default function CalculateKASCO() {
  return <CalculateKASCOPage />;
}
