import React from 'react';
import { Metadata } from 'next';
import AutocreditPage from '@/screens/AutocreditPage/AutocreditPage';
import data from '@/core/data/index';
import CreditsApi from '@/core/services/Credits';

export const metadata: Metadata = {
  title: ' Автокредиты - лучшие предложения для покупки машины в кредит, условия автокредитования и процентные ставки',
  description: 'Выбрать выгодный автокредит в 2024 году на vsebanki.kg. Для подбора автокредитов доступны лучшие предложения Кыргызстана с процентными ставками от 5%'
};

export default async function Microloans() {
  const creditType = (await CreditsApi.getCreditTypes()).data.find((type) => type.title === 'Автокредит')

  return <AutocreditPage data={data.Autocredits} creditType={creditType} />;
}

