'use client';

import React, { useEffect, useState, useRef } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import IntroDeposits from '@/screens/DepositsPage/components/IntroDeposits/IntroDeposits';
import Bonus from '@/components/Bonus/Bonus';
import absolut from '@/assets/icons/absolute_big.svg';
import { StaticImageData } from 'next/image';
import OffersBanks from '@/components/Offers/OffersBanks/OffersBanks';
import PopularOffers from '@/screens/DepositsPage/components/PopularOffers/PopularOffers';
import OfferMonth from '@/components/Offers/OfferMoth/OfferMoth';
import Mailing from '@/components/Mailing/Mailing';
import LatestNews from '@/components/LatestNews/LatestNews';
import SpecialOffersDeposit from '@/screens/DepositsPage/components/SpecialOffersDeposit/SpecialOffersDeposit';
import Communicate from '@/components/Communicate/Communicate';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import TopBanks from '@/components/TopBanks/TopBanks';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getDeposits, getMonthOffers, getSpecialOffers } from '@/core/store/deposits/deposits-actions';
import { getDepositsI } from '@/models/Services';
import { selectGetDepositsStatus, selectMonthOffers, selectSpecialOffers } from '@/core/store/deposits/deposits-selectors';
import { getBanks } from '@/core/store/banks/banks-actions';
import { resetDeposits } from '@/core/store/deposits/deposits-slice';



const DepositsPage = () => {
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)

  const [currentOffer, setCurrentOffer] = useState<number>(1);
  const [filterData, setFilterData] = useState<getDepositsI>({
    limit: 10,
    page: 1,
    sort_type: -1,
    sort: 'rate',
  })
  const monthOffers = useAppSelector(selectMonthOffers)
  const specialOffers = useAppSelector(selectSpecialOffers)

  const handleScrollToDeposits = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const handleChangeFilter = (prop: string, value: any) => {
    if (prop === 'page') {
      setFilterData({ ...filterData, [prop]: value })
    }
    else {
      dispatch(resetDeposits())
      setFilterData({ ...filterData, [prop]: value, page: 1 })
    }
  }

  const fetchDeposits = (params: getDepositsI) => {
    dispatch(getDeposits(params))
  }

  const fetchMonthOffers = () => {
    dispatch(getMonthOffers({
      page: 1,
      limit: 10,
      sort: 'promotion_of_month',
      sort_type: -1
    }))
  }

  const fetchSpecialOffers = () => {
    dispatch(getSpecialOffers({
      page: 1,
      limit: 4,
      sort: 'special_condition',
      sort_type: 1
    }))
  }
  const fetchBanks = () => {
    dispatch(getBanks({ page: 1, limit: 100 }))
  }


  useEffect(() => {
    fetchBanks()
    fetchMonthOffers()
    fetchSpecialOffers()
  }, [])

  useEffect(() => {
    fetchDeposits(filterData)
  }, [filterData])



  return (
    <PageWrapper>
      <IntroDeposits
        handleChangeFilter={handleChangeFilter}
        filterData={filterData}
        handleScrollToDeposits={handleScrollToDeposits}
      />
      <Bonus
        img={'https://leasing.express/wp-content/themes/leasinge/assets/images/logo.svg'}
        title='Получи +2% к ставке при открытии счета в leasing.express до конца месяца'
        text='Откройте вклад до конца месяца и наслаждайтесь дополнительной прибылью вместе с leasing.express'
      />
      <div
        ref={ref}
      >
        <OffersBanks
          options={[{
            text: 'По процентной ставке',
            value: 'rate'
          },
          {
            text: 'По максимальному взносу',
            value: 'max_amount'
          }
          ]}
          filterData={filterData}
          handleChangeFilter={handleChangeFilter}
        />
      </div>

      {/* <PopularOffers setActive={setCurrentOffer} active={currentOffer} data={staticData.PopularOffers} /> */}
      <OfferMonth offers={monthOffers.deposits} />
      <Mailing />
      <LatestNews />
      <SpecialOffersDeposit deposits={specialOffers.deposits} />
      <Communicate />
      <Feedback title={'Отзывы '} sub={'о вкладах'} />
      {/* <FrequentQuestions title={'Частые вопросы'} items={staticData.questData} /> */}
      <TopBanks banks={[]} />
    </PageWrapper>
  );
};

export default DepositsPage;
