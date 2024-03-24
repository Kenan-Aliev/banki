'use client';

import React, { useEffect, useRef, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroRefinancing from '@/screens/RefinancingCredits/components/IntroRefinancing/IntroRefinancing';
import SliderBanksCons from '@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons';
import OurStrongs from '@/components/OurStrongs/OurStrongs';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { StaticImageData } from 'next/image';
import { BankT } from '@/models/Banks/banks';
import { useAppDispatch } from '@/hooks/redux';
import { selectCreditTypes } from '@/core/store/credits/credits-selectors';
import { getCreditsI } from '@/models/Services';
import { getCredits } from '@/core/store/credits/credits-actions';
import CreditBankList from '@/components/credits/CreditBankList';
import data from '@/core/data/index';
import { CreditType } from '@/models/Credits/Credits';

type ourStrongT = {
  num: string;
  title: string;
  sub: string;
};

type itemT = {
  title: string;
  sub: string;
  img: StaticImageData;
  text: string;
};
type quesT = {
  title: string;
  text: string;
};
type Props = {
  data: {
    ourData: itemT[];
    questData: quesT[];
    ourStrongs: ourStrongT[];
  };
  sliderBanks: BankT[];
  creditType: CreditType;
  id?: string;
};

const RefinancingCredits = ({ data, sliderBanks, creditType, id }: Props) => {
  // const itWorksMap = data..ourData;

  const dispatch = useAppDispatch();

  const [filterData, setFilterData] = useState<getCreditsI>({
    limit: 10,
    offset: 0,
    ordering: 'min_summ',
    loanType: String(creditType.id),
    bank: id ? [id] : [],
  });

  const handleChangeFilter = (prop: string, value: any) => {
    if (prop === 'offset') {
      setFilterData({ ...filterData, [prop]: value });
    }
  };

  const fetchCredits = (params: getCreditsI) => {
    dispatch(getCredits(params));
  };

  useEffect(() => {
    const filter = {
      ...filterData,
      bank:
        filterData.bank && typeof filterData.bank !== 'string' && filterData.bank.length > 0
          ? filterData.bank.join()
          : '',
    };
    fetchCredits(filter);
  }, [filterData]);

  return (
    <PageWrapper>
      <IntroRefinancing />
      <SliderBanksCons data={sliderBanks} />
      <CreditBankList
        options={[
          {
            text: 'По минимальной сумме',
            value: 'min_summ',
          },
          {
            text: 'По максимальной сумме',
            value: 'max_summ',
          },
          {
            text: 'По минимальной процентной ставке',
            value: 'min_rating',
          },
        ]}
        filterData={filterData}
        handleChangeFilter={handleChangeFilter}
      />
      <OurStrongs data={data.ourStrongs} />
      <HowItWorks title={'Как работает '} sub={'сервис'} items={data.ourData} />
      <FrequentQuestions title={'Важные вопросы'} items={data.questData} />
    </PageWrapper>
  );
};

export default RefinancingCredits;
