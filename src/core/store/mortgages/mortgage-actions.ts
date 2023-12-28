import MortgagesApi from '@/core/services/Mortgages';
import { getMortgages } from '@/models/Services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllMortgages = createAsyncThunk(
	'mortgages/getAll',
	async (params: getMortgages, { rejectWithValue }) => {
		try {
			const response = await MortgagesApi.getMorgages(params)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})


export const getMonthOffers = createAsyncThunk(
	'mortgages/getMonthOffers',
	async (params: getMortgages, { rejectWithValue }) => {
		try {
			const response = await MortgagesApi.getMorgages(params)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})


// export const getCreditDetails = createAsyncThunk(
// 	'credits/getDetails',
// 	async (creditId: number, { rejectWithValue }) => {
// 		try {
// 			const response = await CreditsApi.getCreditDetails(creditId)
// 			return response.data
// 		} catch (err: any) {
// 			return rejectWithValue(err.response.data.message)
// 		}
// 	})

// export const getTopCredits = createAsyncThunk(
// 	'credits/getTopCredits',
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			const response = await CreditsApi.getTopCredits()
// 			return response.data
// 		} catch (err: any) {
// 			return rejectWithValue(err.response.data.message)
// 		}
// 	})

