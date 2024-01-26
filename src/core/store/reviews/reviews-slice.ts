import { NewsInterface } from '@/models/News/News';
import { RequestStatus } from '@/models/Services';
import { createSlice } from '@reduxjs/toolkit';
import { getReviews, getReviewsCategories } from './reviews-actions';
import { ReviewsCategoriesResponse, ReviewsListResponse } from '@/models/Reviews/Reviews';


interface InitialStateI {
  reviews: {
    status: RequestStatus,
    data: ReviewsListResponse
  }
  categories: {
    status: RequestStatus
    data: ReviewsCategoriesResponse
  }
}

const initialState: InitialStateI = {
  reviews: {
    data: {} as ReviewsListResponse,
    status: 'initial'
  },
  categories: {
    status: 'initial',
    data: {} as ReviewsCategoriesResponse
  }
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getReviews.pending, (state) => {
      state.reviews.status = 'loading'
    })
      .addCase(getReviews.fulfilled, (state, action) => {
        if (action.payload.offset === 0) {
          state.reviews = {
            status: 'success',
            data: {
              count: action.payload.data.count,
              results: action.payload.data.results
            }
          }
        }
        else {
          state.reviews = {
            status: 'success',
            data: {
              count: action.payload.data.count,
              results: [...state.reviews.data.results ?? [], ...action.payload.data.results ?? []]
            }
          }
        }
      })
      .addCase(getReviews.rejected, (state) => {
        state.reviews.status = 'error'
      }),

      builder
        .addCase(getReviewsCategories.pending, (state) => {
          state.categories.status = 'loading'
        })
        .addCase(getReviewsCategories.fulfilled, (state, action) => {
          if (action.payload.offset === 0) {
            state.categories = {
              data: {
                count: action.payload.data.count,
                results: action.payload.data.results
              },
              status: 'success'
            }
          }
          else {
            state.categories = {
              status: 'success',
              data: {
                count: action.payload.data.count,
                results: [...state.categories.data.results ?? [], ...action.payload.data.results ?? []]
              }
            }
          }
        })
        .addCase(getReviewsCategories.rejected, (state) => {
          state.categories.status = 'error'
        })
  }
});


export default reviewsSlice.reducer;
