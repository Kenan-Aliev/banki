import { RootState } from '../store';

export const selectReviews = (state: RootState) => state.reviews.reviews.data

export const selectGetReviewsStatus = (state: RootState) => state.reviews.reviews.status