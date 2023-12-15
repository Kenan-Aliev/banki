import BanksApi from '@/core/services/Banks';
import CreditsApi from '@/core/services/Credits';
import NewsApi from '@/core/services/News';
import { getCreditsI, getNewsT } from '@/models/Services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCredits = createAsyncThunk(
	'credits/getAll',
	async (params: getCreditsI, { rejectWithValue }) => {
		try {
			const response = await CreditsApi.getCredits(params)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})

// export const getNewsCategories = createAsyncThunk(
// 	'news/getCategories',
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			const response = await NewsApi.getNewsCategories()
// 			return response.data
// 		} catch (err: any) {
// 			return rejectWithValue(err.response.data.message)
// 		}
// 	})