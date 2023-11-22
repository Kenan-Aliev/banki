import React from 'react';
import RefinanceIpotekaPage from '@/screens/RefinanceIpotekaPage/RefinanceIpotekaPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Рефинансирование',
};

export default function RefinanceIpoteka() {
  return <RefinanceIpotekaPage />;
}
