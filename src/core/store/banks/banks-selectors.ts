import { RootState } from '../store';

export const selectBanks = (state: RootState) => state.banks.banks.data

export const selectGetBanksStatus = (state: RootState) => state.banks.banks.status