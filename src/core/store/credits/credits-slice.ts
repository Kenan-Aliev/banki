import { CreditItemT, CreditType, CreditsResponseT, TopCreditsResponse } from '@/models/Credits/Credits';
import { RequestStatus } from '@/models/Services';
import { createSlice } from '@reduxjs/toolkit';
import { getCredits, getCreditTypes, getMonthOffers, getCreditDetails, getTopCredits, getTopMicroCredits } from './credits-actions';

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
  },
  creditDetails: {
    status: RequestStatus
    data: CreditItemT
  },
  topCredits: {
    status: RequestStatus
    data: TopCreditsResponse
  },
  topMicroCredits: {
    status: RequestStatus
    data: TopCreditsResponse
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
  },
  creditDetails: {
    status: 'initial',
    data: {} as CreditItemT
  },
  topCredits: {
    status: 'initial',
    data: {} as TopCreditsResponse
  },
  topMicroCredits: {
    data: {} as TopCreditsResponse,
    status: 'initial'
  }
};

export const creditsSlice = createSlice({
  name: 'credits',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCredits.pending, (state) => {
        state.credits.status = 'loading'
      })
      .addCase(getCredits.fulfilled, (state, action) => {
        if (action.payload.offset === 0) {
          state.credits = {
            status: 'success',
            data: {
              results: action.payload.data.results,
              count: action.payload.data.count
            }
          }
        }
        else {
          state.credits = {
            status: 'success',
            data: {
              count: action.payload.data.count,
              results: [...state.credits.data.results ?? [], ...action.payload.data.results ?? []]
            }
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
        }),

      builder
        .addCase(getCreditDetails.pending, (state) => {
          state.creditDetails.status = 'loading'
        })
        .addCase(getCreditDetails.fulfilled, (state, action) => {
          state.creditDetails = {
            status: 'success',
            data: action.payload
          }
        })
        .addCase(getCreditDetails.rejected, (state) => {
          state.creditDetails.status = 'error'
        }),

      builder
        .addCase(getTopCredits.pending, (state) => {
          state.topCredits.status = 'loading'
        })
        .addCase(getTopCredits.fulfilled, (state, action) => {
          state.topCredits = {
            status: 'success',
            data: action.payload
          }
        })
        .addCase(getTopCredits.rejected, (state) => {
          state.topCredits.status = 'error'
        }),

      builder
        .addCase(getTopMicroCredits.pending, (state) => {
          state.topMicroCredits.status = 'loading'
        })
        .addCase(getTopMicroCredits.fulfilled, (state, action) => {
          state.topMicroCredits = {
            status: 'success',
            data: action.payload
          }
        })
        .addCase(getTopMicroCredits.rejected, (state) => {
          state.topMicroCredits.status = 'error'
        })

  }
});


export default creditsSlice.reducer;
