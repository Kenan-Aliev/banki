import { createSlice } from '@reduxjs/toolkit';
import { getDeposits } from './deposits-actions';
import { RequestStatus } from '@/models/Services';
import { DepositsResponseT } from '@/models/Deposit/Deposit';

interface InitialStateI {
  deposits: {
    status: RequestStatus,
    data: DepositsResponseT,
  }
}

const initialState: InitialStateI = {
  deposits: {
    status: 'initial',
    data: {} as DepositsResponseT
  }
};

export const depositsSlice = createSlice({
  name: 'deposits',
  initialState,
  reducers: {
    resetDeposits: (state) => {
      state.deposits.data = {} as DepositsResponseT
    }
  },
  extraReducers: (builder) => {
    builder.
      addCase(getDeposits.fulfilled, (state, action) => {
        state.deposits = {
          status: 'success',
          data: {
            ...action.payload,
            deposits: [...state.deposits.data.deposits ?? [], ...action.payload.deposits ?? []]
          }
        }
      })
      .addCase(getDeposits.pending, (state) => {
        state.deposits.status = 'loading'
      })
      .addCase(getDeposits.rejected, (state) => {
        state.deposits.status = 'error'
      })
  }
});

export const { resetDeposits } = depositsSlice.actions

export default depositsSlice.reducer;
