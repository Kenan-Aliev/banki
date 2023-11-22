import { Metadata } from 'next';
import NewsPage from '@/screens/NewsPage/NewsPage';
import React from 'react';

export const metadata: Metadata = {
  title: 'Новости',
};

export default async function News() {
  return <NewsPage />;
}
