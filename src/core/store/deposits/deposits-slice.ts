import { createSlice } from '@reduxjs/toolkit';
import { getDeposits, getMonthOffers, getSpecialOffers } from './deposits-actions';
import { RequestStatus } from '@/models/Services';
import { DepositItemT, DepositsResponseT } from '@/models/Deposit/Deposit';

interface InitialStateI {
  deposits: {
    status: RequestStatus,
    data: DepositsResponseT<DepositItemT>,
  },
  monthOffers: {
    status: RequestStatus,
    data: DepositsResponseT<DepositItemT>
  },
  specialOffers: {
    status: RequestStatus,
    data: DepositsResponseT<DepositItemT>
  }
}

const initialState: InitialStateI = {
  deposits: {
    status: 'initial',
    data: {} as DepositsResponseT<DepositItemT>
  },
  monthOffers: {
    status: 'initial',
    data: {} as DepositsResponseT<DepositItemT>
  },
  specialOffers: {
    status: 'initial',
    data: {} as DepositsResponseT<DepositItemT>
  }
};

export const depositsSlice = createSlice({
  name: 'deposits',
  initialState,
  reducers: {
    resetDeposits: (state) => {
      state.deposits.data = {} as DepositsResponseT<DepositItemT>
    }
  },
  extraReducers: (builder) => {
    builder.
      addCase(getDeposits.fulfilled, (state, action) => {
        state.deposits = {
          status: 'success',
          data: {
            ...action.payload,
            results: [...state.deposits.data.results ?? [], ...action.payload.results ?? []]
          }
        }
      })
      .addCase(getDeposits.pending, (state) => {
        state.deposits.status = 'loading'
      })
      .addCase(getDeposits.rejected, (state) => {
        state.deposits.status = 'error'
      }),
      builder
        .addCase(getMonthOffers.pending, (state) => {
          state.monthOffers.status = 'loading'
        })
        .addCase(getMonthOffers.fulfilled, (state, action) => {
          state.monthOffers = {
            status: 'success',
            data: {
              ...action.payload
            }
          }
        })
        .addCase(getMonthOffers.rejected, (state, action) => {
          state.monthOffers.status = 'error'
        }),
      builder
        .addCase(getSpecialOffers.pending, (state) => {
          state.specialOffers.status = 'loading'
        })
        .addCase(getSpecialOffers.fulfilled, (state, action) => {
          state.specialOffers = {
            status: 'success',
            data: {
              ...action.payload
            }
          }
        })
        .addCase(getSpecialOffers.rejected, (state) => {
          state.specialOffers.status = 'error'
        })
  }
});

export const { resetDeposits } = depositsSlice.actions

export default depositsSlice.reducer;
