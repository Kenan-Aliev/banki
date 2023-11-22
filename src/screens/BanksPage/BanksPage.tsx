import React from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroBanks from '@/screens/BanksPage/components/IntroBanks/IntroBanks';
import InfoBanks from '@/screens/BanksPage/components/InfoBanks/InfoBanks';
import BanksItems from '@/screens/BanksPage/components/BanksItems/BanksItems';

import { StaticImageData } from 'next/image';

type charsT = {
  name: string;
  count: number;
};
type banksT = {
  title: string;
  sub: string;
  img: StaticImageData;
  m1: number;
  m2: number;
  chars: charsT[];
};
type Props = {
  data: {
    banksItems: banksT[];
  };
};
const BanksPage = ({ data }: Props) => {
  return (
    <PageWrapper>
      <IntroBanks banksItems={data.banksItems} />
      <InfoBanks />
      <BanksItems items={data.banksItems} />
    </PageWrapper>
  );
};

export default BanksPage;
