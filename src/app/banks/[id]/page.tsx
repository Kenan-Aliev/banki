import React from 'react';
import BankPage from '@/screens/BankPage/BankPage';
import axios from 'axios';
import { baseUrl } from '@/core/const/baseUrl';
import { BankT } from '@/models/Banks/banks';

const Page = async (props: any) => {
  const { params } = props;
  const { data } = await axios<BankT>(`${baseUrl}/api/v1/banks/detail/${params.id}/`);
  return <BankPage bank={data} />;
};

export default Page;
