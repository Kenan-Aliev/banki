'use client'

import React, { useEffect, useRef, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroAuto from '@/screens/AutocreditPage/components/IntroAuto/IntroAuto';
import OurStrongAuto from '@/screens/AutocreditPage/components/OurStrongAuto/OurStrongAuto';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { StaticImageData } from 'next/image';
import { CreditType } from '@/models/Credits/Credits';
import { useAppDispatch } from '@/hooks/redux';
import { getCreditsI } from '@/models/Services';
import { getCredits } from '@/core/store/credits/credits-actions';
import Bonus from '@/components/Bonus/Bonus';
import CreditBankList from '@/components/credits/CreditBankList';
import OurStrongs from '@/components/OurStrongs/OurStrongs';

type ItemT = {
  img: StaticImageData;
  title: string;
  sub: string;
  text: string;
};
type questT = {
  title: string;
  text: string;
};
type Props = {
  data: {
    worksData: ItemT[];
    questData: questT[];
    ourStrongs: {
      num: string
      title: string
      sub: string
    }[],
  };
  creditType: CreditType
};

const AutocreditPage = ({ creditType, data }: Props) => {
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)

  const [filterData, setFilterData] = useState<getCreditsI>({
    limit: 10,
    offset: 0,
    currency: 'kgs',
    ordering: 'min_rating',
    loanType: String(creditType.id)
  })

  const handleChangeFilter = (prop: string, value: any) => {
    if (prop === 'offset') {
      setFilterData({ ...filterData, [prop]: value })
    }
    else {
      setFilterData({ ...filterData, [prop]: value, offset: 0 })
    }
  }

  const handleScrollToCredits = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const fetchCredits = (params: getCreditsI) => {
    dispatch(getCredits(params))
  }

  useEffect(() => {
    fetchCredits(filterData)
  }, [filterData])
  return (
    <PageWrapper>
      <IntroAuto
        handleChangeFilter={handleChangeFilter}
        filterData={filterData}
        handleScrollToCredits={handleScrollToCredits}
      />
      <Bonus title='Купи автомобиль в рассрочку за 1 день!'
        text='Нужны только паспорт и права, 98% одобрений, Без залога, справок и поручителей, Первоначальный платеж 25%, Срок 4 года'
        img='https://leasing.express/wp-content/themes/leasinge/assets/images/logo.svg'
        bank_name='leasing.express'
        product_name='Автокредит'
      />
      <div ref={ref}>
        <CreditBankList
          options={[
            {
              text: 'По минимальной процентной ставке',
              value: 'min_rating'
            },
            {
              text: 'По минимальной сумме',
              value: 'min_summ'
            },
            {
              text: 'По максимальной сумме',
              value: 'max_summ'
            }
          ]}
          filterData={filterData}
          handleChangeFilter={handleChangeFilter}
        />
      </div>
      <OurStrongs data={data.ourStrongs} />
      <HowItWorks title={'Как работает'} sub={' сервис'} items={data.worksData} />
      <FrequentQuestions title={'Полезные советы'} items={data.questData} />
    </PageWrapper>
  );
};

export default AutocreditPage;
