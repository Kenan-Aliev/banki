import React from 'react';
import { Metadata } from 'next';
import InsuranceOSAGOPage from '@/screens/InsuranceOSAGO/InsuranceOSAGOPage';

export const metadata: Metadata = {
  title: 'ОСАГО',
};

export default function InsuranceOsago() {
  return <InsuranceOSAGOPage />;
}
