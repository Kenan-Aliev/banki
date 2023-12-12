import { RootState } from '../store';

export const selectReviews = (state: RootState) => state.reviews.reviews.data

export const selectGetReviewsStatus = (state: RootState) => state.reviews.reviews.status

export const selectReviewsCategories = (state: RootState) => state.reviews.categories.data

export const selectGetReviewsCategoriesStatus = (state: RootState) => state.reviews.categories.status

