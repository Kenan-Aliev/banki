import { RootState } from '../store';

export const selectCredits = (state: RootState) => state.credits.credits.data

export const selectGetCreditsStatus = (state: RootState) => state.credits.credits.status

export const selectCreditTypes = (state: RootState) => state.credits.creditTypes.data

export const selectMonthOffers = (state: RootState) => state.credits.monthOffers.data

export const selectCreditDetail = (state: RootState) => state.credits.creditDetails.data

export const selectGetCreditDetailsStatus = (state: RootState) => state.credits.creditDetails.status

export const selectTopCredits = (state: RootState) =>
	state.credits.topCredits.data?.results?.map((result) => result.credit)

export const selectTopMicroCredits = (state: RootState) =>
	state.credits.topMicroCredits.data?.results?.map(result => result.credit)