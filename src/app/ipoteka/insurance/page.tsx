import React from 'react';
import { Metadata } from 'next';
import InsuranceIpotekaPage from '@/screens/InsuranceIpotekaPage/InsuranceIpotekaPage';

export const metadata: Metadata = {
  title: 'Ипотечное страхование',
};

export default function InsuranceIpoteka() {
  return <InsuranceIpotekaPage />;
}
