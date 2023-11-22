import React from 'react';
import { Metadata } from 'next';
import DiscountIpotekaPage from '@/screens/DiscountIpotekaPage/DiscountIpotekaPage';

export const metadata: Metadata = {
  title: 'Ипотека/Выбрать недвижимость',
};

export default function DiscountIpoteka() {
  return <DiscountIpotekaPage />;
}
