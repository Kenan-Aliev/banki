import { RootState } from '../store';

export const selectCards = (state: RootState) => state.cards.cards.data

export const selectCardsStatus = (state: RootState) => state.cards.cards.status

export const selectMonthOffers = (state: RootState) => state.cards.monthOffers.data.results

export const selectTopCreditCards = (state: RootState) => state.cards.topCreditCards.data.results
	?.map((card) => card.card)

export const selectTopDebitCards = (state: RootState) => state.cards.topDebitCards.data.results
	?.map((card) => card.card)