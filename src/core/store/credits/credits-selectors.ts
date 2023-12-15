import { RootState } from '../store';

export const selectCredits = (state: RootState) => state.credits.credits.data

export const selectGetCreditsStatus = (state: RootState) => state.credits.credits.status

export const selectCreditTypes = (state: RootState) => state.credits.creditTypes.data

export const selectMonthOffers = (state: RootState) => state.credits.monthOffers.data
