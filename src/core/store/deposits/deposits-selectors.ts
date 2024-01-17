import { RootState } from '../store';

export const selectDeposits = (state: RootState) => state.deposits.deposits.data

export const selectGetDepositsStatus = (state: RootState) => state.deposits.deposits.status

export const selectMonthOffers = (state: RootState) => state.deposits.monthOffers.data

export const selectGetMonthsOffersStatus = (state: RootState) => state.deposits.monthOffers.status

export const selectSpecialOffers = (state: RootState) => state.deposits.specialOffers.data

export const selectTopDeposits = (state: RootState) => state.deposits.topDeposits.data?.results
	?.map((d) => d.vklad)