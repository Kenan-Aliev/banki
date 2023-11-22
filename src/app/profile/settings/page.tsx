import React from 'react';
import SettingsProfile from '@/screens/SettingsProfile/SettingsProfile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Настройки профиля',
};

const Page = () => <SettingsProfile />;

export default Page;
