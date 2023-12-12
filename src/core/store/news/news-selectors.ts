import { RootState } from '../store';

export const selectNews = (state: RootState) => state.news.news.data

export const selectGetNewsStatus = (state: RootState) => state.news.news.status

export const selectNewsCategories = (state: RootState) => state.news.newsCategories.data
