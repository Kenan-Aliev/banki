import BanksApi from '@/core/services/Banks';
import NewsApi from '@/core/services/News';
import ReviewsApi from '@/core/services/Reviews';
import { getNewsT, getReviewsListData } from '@/models/Services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getReviews = createAsyncThunk(
	'reviews/getAll',
	async (params: getReviewsListData, { rejectWithValue }) => {
		try {
			const response = await ReviewsApi.getReviews(params)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})