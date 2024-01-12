'use client';
import Wrapper from '@/containers/Wrapper';
import Navigation from './components/Navigation/Navigation';
import Bonus from '../../components/Bonus/Bonus';
import Offers from './components/Offers/Offers';
import OffersMonth from '@/components/OffersMonth/OffersMonth';
import Mailing from '@/components/Mailing/Mailing';
import Compilations from '@/screens/CreditMapPage/components/Сompilations/Сompilations';
import LatestNews from '@/components/LatestNews/LatestNews';
import Communicate from '@/components/Communicate/Communicate';
import React, { useEffect, useRef, useState } from 'react';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import data from '@/core/data/index';
import BanksWithButton from '@/components/BanksWithButton/BanksWithButton';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getCardsI } from '@/models/Services';
import { resetCards } from '@/core/store/cards/cards-slice';
import { getBanks } from '@/core/store/banks/banks-actions';
import { getCards } from '@/core/store/cards/cards-actions';
import { resetBanks } from '@/core/store/banks/banks-slice';

export default function CreditMapPage() {
  const staticData = data.CreditCardsPage;

  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)

  const [filterData, setFilterData] = useState<getCardsI>({
    limit: 10,
    offset: 0,
    card_type: 'credit'
  })


  const cleanFilter = () => {
    dispatch(resetCards())
    setFilterData({
      limit: 10,
      offset: 0,
      card_type: 'credit'
    })
  }


  const handleChangeFilter = (prop: string, value: any, selectOne?: boolean) => {
    let newFilterData = { ...filterData, offset: 0, limit: 10 };

    if (selectOne) {
      newFilterData = {
        [prop]: value,
        card_type: filterData.card_type,
        offset: 0,
        limit: 10
      }
    } else if (prop === 'offset') {
      newFilterData[prop] = value;
    } else if (value === false) {
      delete newFilterData[prop];
    } else {
      newFilterData[prop] = value;
    }
    setFilterData(newFilterData);
    dispatch(resetCards());
  };

  const handleScrollToCards = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const fetchCards = (params: getCardsI) => {
    dispatch(getCards(params))
  }

  const fetchBanks = () => {
    dispatch(getBanks({ limit: 50, offset: 0 }))
  }


  useEffect(() => {
    fetchBanks()

    return () => {
      dispatch(resetBanks())
      dispatch(resetCards())
    }
  }, [])

  useEffect(() => {
    const filter = {
      ...filterData,
      issuing_bank: filterData.issuing_bank && typeof filterData.issuing_bank !== 'string' && filterData.issuing_bank.length > 0 ? filterData.issuing_bank.join() : ''
    }
    fetchCards(filter)
  }, [filterData])


  return (
    <Wrapper>
      <Navigation
        handleChangeFilter={handleChangeFilter}
        filterData={filterData}
        handleScrollToCards={handleScrollToCards}
        cleanFilter={cleanFilter}
      />
      <Bonus />
      <div ref={ref}>
        <Offers cards={[]} />
      </div>
      <OffersMonth />
      <Mailing />
      <Compilations />
      <LatestNews />
      <Communicate />
      <Feedback title={'Отзывы '} sub={'о кредитных картах'} category='Кредитные карты' />
      <BanksWithButton
        cards={[]}
        text={'Кредитные карты в Бишкеке '}
        sub_value={'- ТОП 10 лучших в 2023 году'}
      />
      <FrequentQuestions title={'Важная информация'} items={staticData.info} />
    </Wrapper>
  );
}
