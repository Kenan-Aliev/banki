import React from 'react';
import { Metadata } from 'next';
import SlipsBusinessPage from '@/screens/SlipsBusinessPage/SlipsBusinessPage';

export const metadata: Metadata = {
  title: 'Дебетовые бизенес-карты',
};

const Page = () => <SlipsBusinessPage />;

export default Page;
