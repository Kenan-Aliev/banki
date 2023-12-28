import { RootState } from '../store';

export const selectMortgages = (state: RootState) => state.mortgage.mortgages.data

export const selectGetMortgagesStatus = (state: RootState) => state.mortgage.mortgages.status

export const selectMonthOffers = (state: RootState) => state.mortgage.monthOffers.data