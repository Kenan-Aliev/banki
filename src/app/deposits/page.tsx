import React from 'react';
import { Metadata } from 'next';
import data from '@/core/data/index';
import DepositsPage from '@/screens/DepositsPage/DepositsPage';

export const metadata: Metadata = {
  title: ' Вклады — ТОП лучших банков 2024, самые выгодные вклады для физических лиц, вложить деньги под максимальные процентные ставки до 24%',
  description: 'Сравнение процентов по вкладам в банках Кыргызстана. Выберите лучшие вклады в 2024 году на сайте vsebanki.kg. Самые выгодные банковские вклады в сомах и в валюте на сегодня'
};

export default async function Deposits() {

  return <DepositsPage />;
}
