import React from 'react';
import { Metadata } from 'next';
import FeedBackProfile from '@/screens/FeedBackProfile/FeedBackProfile';

export const metadata: Metadata = {
  title: 'Мои отзывы',
};

const Page = () => <FeedBackProfile />;

export default Page;
