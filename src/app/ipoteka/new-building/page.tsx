import React from 'react';
import { Metadata } from 'next';
import IpotekaNewBuildingPage from '@/screens/IpotekaNewBuilding/IpotekaNewBuildingPage';

export const metadata: Metadata = {
  title: 'Новостройки',
};

export default function IpotekaNewBuilding() {
  return <IpotekaNewBuildingPage />;
}
