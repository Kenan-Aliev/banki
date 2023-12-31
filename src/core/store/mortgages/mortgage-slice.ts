import { MortgagesResponseT } from '@/models/Mortgages/Mortgages';
import { RequestStatus } from '@/models/Services';
import { createSlice } from '@reduxjs/toolkit';
import { getAllMortgages, getMonthOffers, getSpecialOffers } from './mortgage-actions';

interface InitialStateI {
  mortgages: {
    status: RequestStatus
    data: MortgagesResponseT
  },
  monthOffers: {
    status: RequestStatus,
    data: MortgagesResponseT
  },
  specialOffers: {
    status: RequestStatus,
    data: MortgagesResponseT
  }
}

const initialState: InitialStateI = {
  mortgages: {
    status: 'initial',
    data: {} as MortgagesResponseT
  },
  monthOffers: {
    status: 'initial',
    data: {} as MortgagesResponseT
  },
  specialOffers: {
    status: 'initial',
    data: {} as MortgagesResponseT
  }
};

export const mortgageSlice = createSlice({
  name: 'mortgage',
  initialState,
  reducers: {
    resetMortgages: (state) => {
      state.mortgages = {
        status: 'initial',
        data: {} as MortgagesResponseT
      }
    },
    resetSpecialOffers: (state) => {
      state.specialOffers = {
        status: 'initial',
        data: {} as MortgagesResponseT
      }
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllMortgages.pending, (state) => {
        state.mortgages.status = 'loading'
      })
      .addCase(getAllMortgages.fulfilled, (state, action) => {
        state.mortgages = {
          status: 'success',
          data: {
            ...action.payload,
            results: [...state.mortgages.data.results ?? [], ...action.payload.results ?? []]
          }
        }
      })
      .addCase(getAllMortgages.rejected, (state) => {
        state.mortgages.status = 'error'
      }),

      builder
        .addCase(getMonthOffers.pending, (state) => {
          state.monthOffers.status = 'loading'
        })
        .addCase(getMonthOffers.fulfilled, (state, action) => {
          state.monthOffers = {
            status: 'success',
            data: action.payload
          }
        })
        .addCase(getMonthOffers.rejected, (state) => {
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
              ...action.payload,
              results: [...state.specialOffers.data.results ?? [], ...action.payload.results ?? []]
            }
          }
        })
        .addCase(getSpecialOffers.rejected, (state) => {
          state.specialOffers.status = 'error'
        })
  }
});

export const { resetMortgages, resetSpecialOffers } = mortgageSlice.actions

export default mortgageSlice.reducer;
