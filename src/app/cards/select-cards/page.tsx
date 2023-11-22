import React from 'react';
import MasterCardsPage from '@/screens/MasterCardsPage/MasterCardsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мастер подбора карт',
};

export default function SelectCardsPage() {
  return <MasterCardsPage />;
}
