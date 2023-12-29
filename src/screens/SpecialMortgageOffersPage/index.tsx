'use client';

import Wrapper from '@/containers/Wrapper';
import Navigation from '@/screens/SpecialCardsOfffersPage/components/Navigation/Navigation';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import React, { useEffect, useState } from 'react';
import MortgageSpecialList from '@/components/mortgages/MortgageSpecialList';
import data from '@/core/data/index';
import { getMortgages } from '@/models/Services';
import { useAppDispatch } from '@/hooks/redux';
import { getSpecialOffers } from '@/core/store/mortgages/mortgage-actions';
import { resetSpecialOffers } from '@/core/store/mortgages/mortgage-slice';

type questItem = {
  title: string;
  text: string;
};
interface SpecialMortgageOffersPageProps {
  staticData: {
    questData: questItem[];
  };
}
export default function SpecialMortgageOffersPage(props: SpecialMortgageOffersPageProps) {
  const { staticData } = props;
  const dispatch = useAppDispatch()

  const [params, setParams] = useState<getMortgages>({
    limit: 10,
    offset: 0,
    special_offer: true
  })

  const handleChangeParams = (prop: string, value: any) => {
    dispatch(resetSpecialOffers())
    setParams({
      ...params, [prop]: value
    })
  }

  const fetchSpecialOffers = (params: getMortgages) => {
    dispatch(getSpecialOffers(params))
  }

  useEffect(() => {
    return () => {
      dispatch(resetSpecialOffers())
    }
  }, [])

  useEffect(() => {
    fetchSpecialOffers(params)
  }, [params]);

  return (
    <Wrapper>
      <Navigation data={data.MortgageSpecialIntro} />
      <MortgageSpecialList handleChangeParams={handleChangeParams} params={params} />
      <FrequentQuestions title={'Частые вопросы'} items={staticData.questData} />
    </Wrapper>
  );
}
