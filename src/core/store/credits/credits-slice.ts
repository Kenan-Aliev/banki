import { CreditType, CreditsResponseT } from '@/models/Credits/Credits';
import { RequestStatus } from '@/models/Services';
import { createSlice } from '@reduxjs/toolkit';
import { getCredits, getCreditTypes, getMonthOffers } from './credits-actions';

interface initialStateI {
  credits: {
    status: RequestStatus
    data: CreditsResponseT
  }
  creditTypes: {
    status: RequestStatus
    data: CreditType[]
  }
  monthOffers: {
    status: RequestStatus
    data: CreditsResponseT
  }
}

const initialState: initialStateI = {
  credits: {
    status: 'initial',
    data: {} as CreditsResponseT
  },
  creditTypes: {
    status: 'initial',
    data: []
  },
  monthOffers: {
    status: 'initial',
    data: {} as CreditsResponseT
  }
};

export const creditsSlice = createSlice({
  name: 'credits',
  initialState,
  reducers: {
    resetCredits: (state) => {
      state.credits = {
        status: 'initial',
        data: {} as CreditsResponseT
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCredits.pending, (state) => {
        state.credits.status = 'loading'
      })
      .addCase(getCredits.fulfilled, (state, action) => {
        state.credits = {
          status: 'success',
          data: {
            ...action.payload,
            results: [...state.credits.data.results ?? [], ...action.payload.results ?? []]
          }
        }
      })
      .addCase(getCredits.rejected, (state) => {
        state.credits.status = 'error'
      }),

      builder
        .addCase(getCreditTypes.pending, (state) => {
          state.creditTypes.status = 'loading'
        })
        .addCase(getCreditTypes.fulfilled, (state, action) => {
          state.creditTypes = {
            status: 'success',
            data: action.payload
          }
        })
        .addCase(getCreditTypes.rejected, (state) => {
          state.creditTypes.status = 'error'
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
        })

  }
});

export const { resetCredits } = creditsSlice.actions

export default creditsSlice.reducer;
