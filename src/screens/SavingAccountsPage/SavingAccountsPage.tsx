'use client';
import React, { useEffect, useRef, useState } from 'react';
import PageWrapper from '@/containers/PageWrapper';
import Intro from '@/screens/SavingAccountsPage/components/Intro/Intro';
import Bonus from '@/components/Bonus/Bonus';
import OffersBanks from '@/components/Offers/OffersBanks/OffersBanks';
import OfferMoth from '@/components/Offers/OfferMoth/OfferMoth';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import TopBanks from '@/components/TopBanks/TopBanks';
import { getDepositsI } from '@/models/Services';
import { getDeposits, getMonthOffers, getTopDeposits } from '@/core/store/deposits/deposits-actions';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { resetDeposits } from '@/core/store/deposits/deposits-slice';
import { resetBanks } from '@/core/store/banks/banks-slice';
import { getBanks } from '@/core/store/banks/banks-actions';
import { selectMonthOffers } from '@/core/store/deposits/deposits-selectors';

interface SavingAccountsPageProps {
  staticData: any;
}

const SavingAccountsPage = ({ staticData }: SavingAccountsPageProps) => {

  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)

  const [filterData, setFilterData] = useState<getDepositsI>({
    limit: 10,
    offset: 0,
    ordering: 'interest_rate',
    currency: 'kgs',
  })
  const monthOffers = useAppSelector(selectMonthOffers)

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



  const cleanFilter = () => {
    dispatch(resetDeposits())
    setFilterData({
      limit: 10,
      offset: 0,
      ordering: filterData.ordering,
      currency: 'kgs',
    })
  }

  const fetchDeposits = (params: getDepositsI) => {
    dispatch(getDeposits(params))
  }

  const fetchMonthOffers = () => {
    dispatch(getMonthOffers({
      offset: 0,
      limit: 10,
      offer_of_the_month: true
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
      <Intro
        cleanFilter={cleanFilter}
        filterData={filterData}
        handleChangeFilter={handleChangeFilter}
        handleScrollToDeposits={handleScrollToDeposits}
      />
      <Bonus
        img={'https://leasing.express/wp-content/themes/leasinge/assets/images/logo.svg'}
        title='Получи +2% к ставке при открытии счета в leasing.express до конца месяца'
        text='Откройте вклад до конца месяца и наслаждайтесь дополнительной прибылью вместе с leasing.express'
      />
      <div ref={ref}>
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
      <OfferMoth offers={monthOffers.results} category='Вклады' />
      <Feedback title={'Отзывы'} sub={' о вкладах'} category='Вклады' />
      <TopBanks />
    </PageWrapper>
  );
};

export default SavingAccountsPage;
