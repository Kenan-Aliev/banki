import { RootState } from '../store';

export const selectDeposits = (state: RootState) => state.deposits.deposits.data

export const selectGetDepositsStatus = (state: RootState) => state.deposits.deposits.status