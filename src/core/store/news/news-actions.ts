import BanksApi from '@/core/services/Banks';
import NewsApi from '@/core/services/News';
import { getNewsT } from '@/models/Services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getNews = createAsyncThunk(
	'news/getAll',
	async (params: getNewsT, { rejectWithValue }) => {
		try {
			const response = await NewsApi.getNews(params)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})

export const getNewsCategories = createAsyncThunk(
	'news/getCategories',
	async (_, { rejectWithValue }) => {
		try {
			const response = await NewsApi.getNewsCategories()
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})