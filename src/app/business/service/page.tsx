import React from 'react';
import { Metadata } from 'next';
import ServiceBusinessPage from '@/screens/ServiceBusinessPage/ServiceBusinessPage';

export const metadata: Metadata = {
  title: 'Расчётно-кассовое обслуживание',
};
const Page = () => <ServiceBusinessPage />;

export default Page;
