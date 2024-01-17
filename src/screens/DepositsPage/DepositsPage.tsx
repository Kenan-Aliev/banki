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
import { getDeposits, getMonthOffers, getSpecialOffers, getTopDeposits } from '@/core/store/deposits/deposits-actions';
import { getDepositsI } from '@/models/Services';
import { selectMonthOffers, selectSpecialOffers } from '@/core/store/deposits/deposits-selectors';
import { getBanks } from '@/core/store/banks/banks-actions';
import { resetDeposits } from '@/core/store/deposits/deposits-slice';
import { resetBanks } from '@/core/store/banks/banks-slice';
import data from '@/core/data'



const DepositsPage = () => {
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)

  const communicateData = data.DepositsPage.communicate

  const [currentOffer, setCurrentOffer] = useState<number>(1);
  const [filterData, setFilterData] = useState<getDepositsI>({
    limit: 10,
    offset: 0,
    ordering: 'interest_rate',
    currency: 'kgs',
  })
  const monthOffers = useAppSelector(selectMonthOffers)
  const specialOffers = useAppSelector(selectSpecialOffers)

  const handleScrollToDeposits = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const handleChangeFilter = (prop: string, value: any) => {
    if (prop === 'offset') {
      setFilterData({ ...filterData, [prop]: value })
    }

    else {
      if (value === false) {
        delete filterData[prop]
        setFilterData({ ...filterData })
      }
      else {
        setFilterData({ ...filterData, [prop]: value, offset: 0 })
      }
      dispatch(resetDeposits())
    }
  }

  const fetchDeposits = (params: getDepositsI) => {
    dispatch(getDeposits(params))
  }

  const cleanFilter = () => {
    dispatch(resetDeposits())
    setFilterData({
      limit: 10,
      offset: 0,
      ordering: filterData.ordering,
      currency: 'kgs',
    })
  }

  const fetchMonthOffers = () => {
    dispatch(getMonthOffers({
      offset: 0,
      limit: 10,
      offer_of_the_month: true
    }))
  }

  const fetchSpecialOffers = () => {
    dispatch(getSpecialOffers({
      offset: 0,
      limit: 4,
      special_offer: true
    }))
  }
  const fetchBanks = () => {
    dispatch(getBanks({ offset: 0, limit: 100 }))
  }

  const fetchTopDeposits = () => {
    dispatch(getTopDeposits())
  }


  useEffect(() => {
    fetchBanks()
    fetchMonthOffers()
    fetchSpecialOffers()
    fetchTopDeposits()
    return () => {
      dispatch(resetBanks())
      dispatch(resetDeposits())
    }
  }, [])

  useEffect(() => {
    const filter = {
      ...filterData,
      bank_id: filterData.bank_id && typeof filterData.bank_id !== 'string' && filterData.bank_id.length > 0 ? filterData.bank_id.join() : ''
    }
    fetchDeposits(filter)
  }, [filterData])



  return (
    <PageWrapper>
      <IntroDeposits
        handleChangeFilter={handleChangeFilter}
        filterData={filterData}
        handleScrollToDeposits={handleScrollToDeposits}
        cleanFilter={cleanFilter}
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
            value: 'interest_rate'
          },
          {
            text: 'По минимальному взносу',
            value: 'min_sum'
          },
          {
            text: 'По максимальному взносу',
            value: 'max_sum'
          }
          ]}
          filterData={filterData}
          handleChangeFilter={handleChangeFilter}
        />
      </div>

      {/* <PopularOffers setActive={setCurrentOffer} active={currentOffer} data={staticData.PopularOffers} /> */}
      <OfferMonth offers={monthOffers.results} category='Вклады' />
      <Mailing />
      <LatestNews />
      <SpecialOffersDeposit deposits={specialOffers.results} />
      <Communicate data={communicateData} />
      <Feedback title={'Отзывы '} sub={'о вкладах'} category='Вклады' />
      {/* <FrequentQuestions title={'Частые вопросы'} items={staticData.questData} /> */}
      <TopBanks />
    </PageWrapper>
  );
};

export default DepositsPage;
