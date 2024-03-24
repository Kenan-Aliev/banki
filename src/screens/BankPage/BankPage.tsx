'use client';

import PageWrapper from '@/containers/PageWrapper';
import React from 'react';
import BankIntro from './components/BankIntro/BankIntro';
import BankProducts from './components/BankProducts/BankProducts';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import LatestNews from '@/components/LatestNews/LatestNews';
import HaveQues from '@/components/HaveQues/HaveQues';
import PopularOffers from './components/PopularOffers/PopularOffers';
import BankInfo from './components/BankInfo/BankInfo';
import { BankT } from '@/models/Banks/banks';

interface Props {
  bank: BankT;
}

function BankPage(props: Props) {
  const { bank } = props;
  return (
    <PageWrapper>
      <BankIntro bank={bank} />
      <BankProducts />
      <PopularOffers bank={bank} />
      <BankInfo bank={bank} />
      <Feedback title={'Отзывы '} sub={'о банке'} category='Банки' bank_id={bank.id} />
      <LatestNews />
      <HaveQues />
    </PageWrapper>
  );
}

export default BankPage;
