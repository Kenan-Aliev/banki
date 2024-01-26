import BanksApi from '@/core/services/Banks';
import NewsApi from '@/core/services/News';
import ReviewsApi from '@/core/services/Reviews';
import { getNewsT, getReviewsCategoriesData, getReviewsListData } from '@/models/Services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getReviews = createAsyncThunk(
	'reviews/getAll',
	async (params: getReviewsListData, { rejectWithValue }) => {
		try {
			const response = await ReviewsApi.getReviews(params)
			return { offset: params.offset, data: response.data }
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})

export const getReviewsCategories = createAsyncThunk(
	'reviews/getCategories',
	async (params: getReviewsCategoriesData, { rejectWithValue }) => {
		try {
			const response = await ReviewsApi.getReviewsCategories(params)
			return { offset: params.offset, data: response.data }
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})