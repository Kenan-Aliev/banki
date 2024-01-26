'use client';

import React, { useEffect, useState } from 'react';
import Search from '@/UI/Search/Search';
import OfferMoth from '@/components/Offers/OfferMoth/OfferMoth';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import PageWrapper from '@/containers/PageWrapper';
import Stock from '@/screens/HomePage/components/Stock/Stock';
import Slide from '@/screens/HomePage/components/Slide/Slide';
import Banks from '@/screens/HomePage/components/Banks/Banks';
import Calculate from './components/Calculate/Calculate';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import s from './HomePage.module.scss';
import { BankT } from '@/models/Banks/banks';


type Props = {
    data: any;
    banks: BankT[]
};

const HomePage = ({ data, banks }: Props) => {
    const dispatch = useAppDispatch();

    const { serviceItems } = useAppSelector((state) => state.home);
    const [searchVal, setSearchVal] = useState<string>('');

    const handleChangeSearchVal = (e: any) => {
        setSearchVal(e.target.value)
    }

    const { promotions } = useAppSelector(state => state.home);
    const filteredArr =
        serviceItems.filter((i) => i.text.toLowerCase().includes(searchVal.toLowerCase()));



    return (
        <PageWrapper>
            <h1 className={s.title}>Главный маркетплейс финансовых услуг Кыргызстана</h1>
            {promotions && <Stock promotions={promotions} />}
            <Slide data={data.iconsSlide} />
            <Search
                onChange={handleChangeSearchVal}
                value={searchVal}
                placeholder={'Найти необходимую услугу...'}
                filteredArr={filteredArr}
            />
            <Banks data={banks} />
            <Calculate />
            {/* <OfferMoth offers={data.offersMoth} choiceItems={data.choiseOffer} /> */}
            <LatestNews />
            <Feedback chois={data.choiseFeedback} />
        </PageWrapper>
    );
};

export default HomePage;
