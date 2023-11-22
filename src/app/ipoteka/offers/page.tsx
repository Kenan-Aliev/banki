import React from 'react';
import IpotekaOffersPage from '@/screens/IpotekaOffersPage/IpotekaOffersPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мастер подбора ипотеки',
};

export default function OffersIpoteka() {
  return <IpotekaOffersPage />;
}
