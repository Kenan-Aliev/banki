import CardsApi from '@/core/services/Cards';
import { getCardsI } from '@/models/Services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCards = createAsyncThunk(
	'cards/getAll',
	async (params: getCardsI, { rejectWithValue }) => {
		try {
			const response = await CardsApi.getCards(params)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})




