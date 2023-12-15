'use client';
import React, { useEffect, useRef, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroConsumer from '@/screens/ConsumerCreditsPage/Components/IntroConsumer/IntroConsumer';
import Bonus from '@/components/Bonus/Bonus';
import SliderBanksCons from '@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons';
import CatalogItems from '@/components/Catalog/CatalogItems/CatalogItems';
import LatestNews from '@/components/LatestNews/LatestNews';
import Mailing from '@/components/Mailing/Mailing';
import Communicate from '@/components/Communicate/Communicate';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import { StaticImageData } from 'next/image';
import CreditBankList from '@/components/credits/CreditBankList';
import CreditOfferList from '@/components/credits/CreditOfferList';
import CreditTopBankList from '@/components/credits/CreditTopBankList';
import { creditsData } from '@/core/data/credits/all-credits';
import { BankT } from '@/models/Banks/banks';
import { getCreditsI } from '@/models/Services';
import { useAppDispatch } from '@/hooks/redux';
import { resetCredits } from '@/core/store/credits/credits-slice';
import { getCredits } from '@/core/store/credits/credits-actions';

export type oneOfferConsumerCreditsT = {
  bank_name: string;
  name: string;
  type: string;
  min_procent: number;
  max_procent: number;
  min_amount: number;
  max_amount: number;
  timeframe_min: number;
  timeframe_max: number;
};

type catalogT = {
  img: StaticImageData;
  name: string;
};
type ItemT = {
  title: string;
  text: string;
};

interface ConsumerCreditsPageProps {
  staticData: {
    catalogData: catalogT[];
    questData: ItemT[];
    creditsAll: oneOfferConsumerCreditsT[];
  };
  sliderBanks: BankT[];
}

const ConsumerCreditsPage = (props: ConsumerCreditsPageProps) => {
  const { staticData, sliderBanks } = props;

  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)

  const [filterData, setFilterData] = useState<getCreditsI>({
    limit: 10,
    offset: 0,
  })
  const consumerCredits = staticData.creditsAll.filter((credit) => credit.type === 'Потребительский');

  const handleScrollToCredits = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const handleChangeFilter = (prop: string, value: any) => {
    if (prop === 'offset') {
      setFilterData({ ...filterData, [prop]: value })
    }
    else {
      dispatch(resetCredits())
      setFilterData({ ...filterData, [prop]: value, offset: 0 })
    }
  }


  const fetchCredits = (params: getCreditsI) => {
    dispatch(getCredits(params))
  }

  const cleanFilter = () => {
    dispatch(resetCredits())
    setFilterData({
      limit: 10,
      offset: 0,
    })
  }

  // useEffect(() => {
  //   fetchMonthOffers()

  // }, [])

  useEffect(() => {
    const filter = {
      ...filterData,
      bank: filterData.bank && typeof filterData.bank !== 'string' && filterData.bank.length > 0 ? filterData.bank.join() : ''
    }
    fetchCredits(filter)
  }, [filterData])

  return (
    <PageWrapper>
      <IntroConsumer
        handleChangeFilter={handleChangeFilter}
        filterData={filterData}
        handleScrollToCredits={handleScrollToCredits}
        cleanFilter={cleanFilter}
        banks={sliderBanks}
      />
      <Bonus title='Акция «Воплоти мечту!'
        text='Оформите кредит до 500 000 сомов и дайте волю своему воображению. Приобретайте то, что так давно откладывали!'
        img='https://btbonline.baitushum.kg/static_django/landing/images/BTB-NEW-LOGO.png'
      />
      <SliderBanksCons data={sliderBanks} />
      <div ref={ref}>
        <CreditBankList
          options={[
            {
              text: 'По процентной ставке',
              value: ''
            },
            {
              text: 'По максимальной сумме',
              value: ''
            },
            {
              text: 'По максимальному сроку',
              value: ''
            }
          ]}
          filterData={filterData}
          handleChangeFilter={handleChangeFilter}
        />
      </div>
      <CreditOfferList credits={[]} />
      <CatalogItems title={'Каталог кредитов'} items={staticData.catalogData} />
      <LatestNews category='Занять' />
      <Mailing />
      <Communicate />
      <Feedback title={'Отзывы '} sub={'о кредитах'} category='Кредиты' />
      <CreditTopBankList credits={[]} />
      <FrequentQuestions title={'Важные вопросы'} items={staticData.questData} />
    </PageWrapper>
  );
};

export default ConsumerCreditsPage;
