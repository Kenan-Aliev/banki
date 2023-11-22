import React from 'react';
import data from '@/core/data/index';
import { Metadata } from 'next';
import HomePage from '@/screens/HomePage/HomePage';

export const metadata: Metadata = {
  title: 'Главная',
};

export default function Home() {
  return <HomePage data={data.HomePage} />;
}
