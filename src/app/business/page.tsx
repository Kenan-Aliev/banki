import React from 'react';
import BusinessPage from '@/screens/BusinessPage/BusinessPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Бизнес',
};

export default function Business() {
  return <BusinessPage />;
}
