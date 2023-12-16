import { RootState } from '../store';

export const selectBanks = (state: RootState) => state.banks.banks.data

export const selectGetBanksStatus = (state: RootState) => state.banks.banks.status

export const selectBankDetails = (state: RootState) => state.banks.bankDetails.data

export const selectGetBankDetails = (state: RootState) => state.banks.bankDetails.status