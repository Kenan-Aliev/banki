import { RootState } from '../store';

export const selectCards = (state: RootState) => state.cards.cards.data

export const selectCardsStatus = (state: RootState) => state.cards.cards.status

export const selectMonthOffers = (state: RootState) => state.cards.monthOffers.data.results