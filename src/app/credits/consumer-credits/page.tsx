import React from 'react';
import ConsumerCreditsPage from '@/screens/ConsumerCreditsPage/ConsumerCreditsPage';
import { Metadata } from 'next';
import data from '@/core/data/index';
import BanksApi from '@/core/services/Banks';

export const metadata: Metadata = {
  title: 'Потребительские кредиты',
};

export default async function ConsumerCredits() {
  const banks = (await BanksApi.getBanks({ offset: 0, limit: 50, type: 'bank' })).data.results

  return <ConsumerCreditsPage
    staticData={{
      catalogData: data.ConsumerCredits.catalogData,
      communicate: data.DepositsPage.communicate,
      questData: data.ConsumerCredits.questData
    }}
    sliderBanks={banks} />;
}
