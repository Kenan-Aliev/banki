import { RootState } from '../store';

export const selectCredits = (state: RootState) => state.credits.credits.data

export const selectGetCreditsStatus = (state: RootState) => state.credits.credits.status

// export const selectNewsCategories = (state: RootState) => state.news.newsCategories.data
