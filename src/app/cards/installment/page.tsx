import { Metadata } from 'next';
import InstallmentPage from '@/screens/InstallmentPage/InstallmentPage';
import React from 'react';

export const metadata: Metadata = {
  title: 'Кредитные карты с рассрочкой',
};

export default async function Installment() {
  return <InstallmentPage />;
}
