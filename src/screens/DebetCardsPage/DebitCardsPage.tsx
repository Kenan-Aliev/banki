'use client';
import Wrapper from '@/containers/Wrapper';
import Navigation from '@/screens/DebetCardsPage/components/Navigation/Navigation';
import Bonus from '@/components/Bonus/Bonus';
import CardsList from '@/components/CardsList/CardsList';
import Mailing from '@/components/Mailing/Mailing';
import React, { useEffect, useRef, useState } from 'react';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import Communicate from '@/components/Communicate/Communicate';
import FrequentQuestions from '@/components/FrequentQuestions/FrequentQuestions';
import data from '@/core/data/index';
import Compilations from '@/screens/DebetCardsPage/components/Сompilations/Сompilations';
import BanksWithButton from '@/components/BanksWithButton/BanksWithButton';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectMonthOffers, selectTopCreditCards, selectTopDebitCards } from '@/core/store/cards/cards-selectors';
import { getCardsI } from '@/models/Services';
import { getCards, getMonthOffers, getTopCreditCards, getTopDebitCards } from '@/core/store/cards/cards-actions';
import { resetCards } from '@/core/store/cards/cards-slice';
import { getBanks } from '@/core/store/banks/banks-actions';
import { resetBanks } from '@/core/store/banks/banks-slice';
import OfferMonth from '@/components/Offers/OfferMoth/OfferMoth';

export default function DebitCardsPage() {
  const dataMap = data.DebitCardsPage.questData;
  const communicate = data.DepositsPage.communicate

  const monthOffers = useAppSelector(selectMonthOffers)
  const topDebitCards = useAppSelector(selectTopDebitCards)

  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)

  const [filterData, setFilterData] = useState<getCardsI>({
    limit: 10,
    offset: 0,
    card_type: 'debit',
    ordering: 'cashback_percentage'
  })

  const fetchMonthOffers = () => {
    dispatch(getMonthOffers({ card_type: 'debit', limit: 10, offset: 0, offer_of_the_month: true }))
  }

  const cleanFilter = () => {
    dispatch(resetCards())
    setFilterData({
      limit: 10,
      offset: 0,
      card_type: 'debit',
      ordering: filterData.ordering
    })
  }


  const handleChangeFilter = (prop: string, value: any, selectOne?: boolean) => {
    let newFilterData = { ...filterData, offset: 0, limit: 10, ordering: filterData.ordering };

    if (selectOne) {
      newFilterData = {
        [prop]: value,
        card_type: filterData.card_type,
        offset: 0,
        limit: 10,
        ordering: filterData.ordering
      }
      dispatch(resetCards());
    } else if (prop === 'offset') {
      newFilterData[prop] = value;
    } else if (value === false) {
      delete newFilterData[prop];
      dispatch(resetCards());
    } else {
      newFilterData[prop] = value;
      dispatch(resetCards());
    }
    setFilterData(newFilterData);
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

  const fetchTopDebitCards = () => {
    dispatch(getTopDebitCards())
  }


  useEffect(() => {
    fetchBanks()
    fetchMonthOffers()
    fetchTopDebitCards()
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
        cleanFilter={cleanFilter}
        filterData={filterData}
        handleChangeFilter={handleChangeFilter}
        handleScrollToCards={handleScrollToCards}
      />
      <Bonus />
      <div ref={ref}>
        <CardsList
          filterData={filterData}
          handleChangeFilter={handleChangeFilter}
          cardType='Дебетовые карты'
          options={[
            {
              text: 'По кэшбеку',
              value: 'cashback_percentage'
            },
            {
              text: 'По кредитному лимиту',
              value: 'credit_limit'
            },
          ]}
        />
      </div>
      <OfferMonth offers={monthOffers} category='Дебетовые карты' />
      {/* <Mailing /> */}
      <Compilations />
      <LatestNews />
      <Communicate data={communicate}/>
      <Feedback title={'Отзывы '} sub={'о дебетовых картах'} category='Дебетовые карты' />
      <BanksWithButton
        cards={topDebitCards}
        text={'Дебетовые карты в Бишкеке '}
        sub_value={'- ТОП 10 лучших в 2023 году'}
      />
      <FrequentQuestions title={'Важная информация'} items={dataMap} />
    </Wrapper>
  );
}
