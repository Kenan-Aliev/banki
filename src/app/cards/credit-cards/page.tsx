// import CreditMapPage from "@/screens/CreditMapPage/CreditMapPage";
import CreditMapPage from '@/screens/CreditMapPage/CreditMapPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Кредитные карты',
};

export default async function CreditMap() {
  return <CreditMapPage />;
}
