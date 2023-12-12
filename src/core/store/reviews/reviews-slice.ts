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
    resetReviews: (state) => {
      state.reviews = {
        data: {} as ReviewsListResponse,
        status: 'initial'
      }
    },
    resetCategories: (state) => {
      state.categories = {
        data: {} as ReviewsCategoriesResponse,
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
      }),

      builder
        .addCase(getReviewsCategories.pending, (state) => {
          state.categories.status = 'loading'
        })
        .addCase(getReviewsCategories.fulfilled, (state, action) => {
          state.categories = {
            status: 'success',
            data: {
              ...action.payload,
              results: [...state.categories.data.results ?? [], ...action.payload.results ?? []]
            }
          }
        })
        .addCase(getReviewsCategories.rejected, (state) => {
          state.categories.status = 'error'
        })
  }
});


export const { resetReviews, resetCategories } = reviewsSlice.actions
export default reviewsSlice.reducer;
