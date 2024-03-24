import React from 'react';
import { Metadata } from 'next';
import data from '@/core/data/index';
import DepositsPage from '@/screens/DepositsPage/DepositsPage';

export const metadata: Metadata = {
  title:
    ' Вклады — ТОП лучших банков 2024, самые выгодные вклады для физических лиц, вложить деньги под максимальные процентные ставки до 24%',
  description: `Сервис vsebanki.kg позволяет быстро найти лучшие вклады с самыми высокими процентными ставками и рассчитать доходность.
   На ${new Date().toLocaleDateString()} вам доступны проверенные вклады со ставками до 24% и открытием в онлайн-режиме.
    Сравните ставки по вкладам для физических лиц и выберите, куда лучше вложить деньги под проценты, чтобы получить максимальный доход.`,
};

export default async function Deposits(props: any) {
  return <DepositsPage id={props.searchParams.id} />;
}
