import { CreditsResponseT } from '@/models/Credits/Credits';
import { RequestStatus } from '@/models/Services';
import { createSlice } from '@reduxjs/toolkit';
import { getCredits } from './credits-actions';

interface initialStateI {
  credits: {
    status: RequestStatus
    data: CreditsResponseT
  }
}

const initialState: initialStateI = {
  credits: {
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
      })
  }
});

export const { resetCredits } = creditsSlice.actions

export default creditsSlice.reducer;
