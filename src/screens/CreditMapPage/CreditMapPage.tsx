'use client';
import Wrapper from '@/containers/Wrapper';
import Navigation from './components/Navigation/Navigation';
import Bonus from '../../components/Bonus/Bonus';
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
import { getBanks } from '@/core/store/banks/banks-actions';
import { getCards, getMonthOffers, getTopCreditCards } from '@/core/store/cards/cards-actions';
import CardsList from '@/components/CardsList/CardsList';
import { selectMonthOffers, selectTopCreditCards } from '@/core/store/cards/cards-selectors';
import bonusImg from '@/assets/icons/credit_cards_bonus.jpg'
import OfferMonth from '@/components/Offers/OfferMoth/OfferMoth';

export default function CreditMapPage() {
  const staticData = data.CreditCardsPage;
  const communicate = data.DepositsPage.communicate
  const monthOffers = useAppSelector(selectMonthOffers)
  const topCreditCards = useAppSelector(selectTopCreditCards)

  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)

  const [filterData, setFilterData] = useState<getCardsI>({
    limit: 10,
    offset: 0,
    card_type: 'credit',
    ordering: 'cashback_percentage'
  })

  const fetchMonthOffers = () => {
    dispatch(getMonthOffers({ card_type: 'credit', limit: 10, offset: 0, offer_of_the_month: true }))
  }

  const cleanFilter = () => {
    setFilterData({
      limit: 10,
      offset: 0,
      card_type: 'credit',
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
    } else if (value === false) {
      delete newFilterData[prop];
    } else {
      newFilterData[prop] = value;
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

  const fetchTopCreditCards = () => {
    dispatch(getTopCreditCards())
  }


  useEffect(() => {
    fetchBanks()
    fetchMonthOffers()
    fetchTopCreditCards()
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
      <Bonus
        title='Золотая карта для каждого!'
        text='KKB Gold – это особые возможности для всех.
         Быстрое онлайн-оформление, бесплатный выпуск карты, кэшбэк, удобный сервис'
        img={bonusImg}
      />
      <div ref={ref}>
        <CardsList
          filterData={filterData}
          handleChangeFilter={handleChangeFilter}
          cardType='Кредитные карты'
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
      <OfferMonth offers={monthOffers} category='Кредитные карты' />
      {/* <OffersMonth /> */}
      {/* <Mailing /> */}
      <Compilations />
      <LatestNews />
      <Communicate data={communicate} />
      <Feedback title={'Отзывы '} sub={'о кредитных картах'} category='Кредитные карты' />
      <BanksWithButton
        cards={topCreditCards}
        text={'Кредитные карты в Бишкеке '}
        sub_value={'- ТОП 10 лучших в 2023 году'}
      />
      <FrequentQuestions title={'Важная информация'} items={staticData.info} />
    </Wrapper>
  );
}
