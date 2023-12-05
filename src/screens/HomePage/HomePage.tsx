'use client';

import React, { useEffect, useState } from 'react';
import Search from '@/UI/Search/Search';
import OfferMoth from '@/components/Offers/OfferMoth/OfferMoth';
import LatestNews from '@/components/LatestNews/LatestNews';
import Feedback from '@/components/FeedBacks/Feedback/Feedback';
import PageWrapper from '@/containers/PageWrapper';
import Stock, { ItemsActionT } from '@/screens/HomePage/components/Stock/Stock';
import Slide from '@/screens/HomePage/components/Slide/Slide';
import Banks from '@/screens/HomePage/components/Banks/Banks';
import Calculate from './components/Calculate/Calculate';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import s from './HomePage.module.scss';
import { getBanks } from '@/core/store/banks/banks-actions';


type SearchItem = {
    text: string;
    link: string;
};

type Props = {
    data: any;
};

const HomePage = ({ data }: Props) => {
    const dispatch = useAppDispatch();

    const { serviceItems } = useAppSelector((state) => state.home);
    const [searchVal, setSearchVal] = useState<string>('');

    const { banksItems } = useAppSelector(state => state.home)
    const { promotions } = useAppSelector(state => state.home);
    const filterArr = (items: SearchItem[]) =>
        items.filter((i) => i.text.toLowerCase().includes(searchVal.toLowerCase()));


    useEffect(() => {
        dispatch(getBanks({ limit: 10, offset: 0, type: 'bank' }))
        // dispatch(getPromotionsThunk());
    }, []);



    return (
        <PageWrapper>
            <h1 className={s.title}>Главный маркетплейс финансовых услуг Кыргызстана</h1>
            {promotions && <Stock promotions={promotions} />}
            <Slide data={data.iconsSlide} />
            <Search
                setValue={setSearchVal}
                value={searchVal}
                filterArr={filterArr}
                itemsSearch={serviceItems}
                placeholder={'Найти необходимую услугу...'}
            />
            <Banks data={banksItems} />
            <Calculate />
            <OfferMoth offers={data.offersMoth} choiceItems={data.choiseOffer} />
            <LatestNews />
            <Feedback chois={data.choiseFeedback} />
        </PageWrapper>
    );
};

export default HomePage;
