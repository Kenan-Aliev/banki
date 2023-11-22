import React from 'react';
import IpotekaSecondaryPage from '@/screens/IpotekaSecondaryPage/IpotekaSecondaryPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Вторичное жилье',
};

export default function SecondaryIpoteka() {
  return <IpotekaSecondaryPage />;
}
