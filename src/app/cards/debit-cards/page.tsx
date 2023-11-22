import { Metadata } from 'next';
import DebitCardsPage from '@/screens/DebetCardsPage/DebitCardsPage';
import React from 'react';

export const metadata: Metadata = {
  title: 'Дебетовые карты',
};

export default async function DebitCards() {
  return <DebitCardsPage />;
}
