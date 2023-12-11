import { NewsInterface } from '@/models/News/News';
import { RequestStatus } from '@/models/Services';
import { createSlice } from '@reduxjs/toolkit';
import { getReviews } from './reviews-actions';
import { ReviewsListResponse } from '@/models/Reviews/Reviews';


interface InitialStateI {
  reviews: {
    status: RequestStatus,
    data: ReviewsListResponse
  }
}

const initialState: InitialStateI = {
  reviews: {
    data: {} as ReviewsListResponse,
    status: 'initial'
  },
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    resetReviews: (state) => {
      state.reviews = {
        data: {} as ReviewsListResponse,
        status: 'initial'
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getReviews.pending, (state) => {
      state.reviews.status = 'loading'
    })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = {
          status: 'success',
          data: {
            ...action.payload,
            results: [...state.reviews.data.results ?? [], ...action.payload.results ?? []]
          }
        }
      })
      .addCase(getReviews.rejected, (state) => {
        state.reviews.status = 'error'
      })
  }
});


export const { resetReviews } = reviewsSlice.actions
export default reviewsSlice.reducer;
