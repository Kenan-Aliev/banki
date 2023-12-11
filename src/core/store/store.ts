import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import BusinessSlice from '@/core/store/business/business-slice';
import CardsSlice from '@/core/store/cards/cards-slice';
import CreditsSlice from '@/core/store/credits/credits-slice';
import DepositsSlice from '@/core/store/deposits/deposits-slice';
import InvestingSlice from '@/core/store/investing/investing-slice';
import homeSlice from '@/core/store/home/home-slice';
import MortgageSlice from '@/core/store/mortgages/mortgage-slice';
import NewsSlice from '@/core/store/news/news-slice';
import BanksSlice from '@/core/store/banks/banks-slice'
import UsersSlice from '@/core/store/users/users-slice'
import ReviewsSlice from '@/core/store/reviews/reviews-slice'

const reducers = {
    business: BusinessSlice,
    cards: CardsSlice,
    credits: CreditsSlice,
    deposits: DepositsSlice,
    investment: InvestingSlice,
    home: homeSlice,
    mortgage: MortgageSlice,
    news: NewsSlice,
    banks: BanksSlice,
    users: UsersSlice,
    reviews: ReviewsSlice
}

const combinedReducer = combineReducers(reducers);

const rootReducer = (
    state: ReturnType<typeof combinedReducer> | undefined,
    action: AnyAction
) => combinedReducer(state, action)

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



