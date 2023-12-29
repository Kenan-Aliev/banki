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


export const getSpecialOffers = createAsyncThunk(
	'mortgages/getSpecialOffers',
	async (params: getMortgages, { rejectWithValue }) => {
		try {
			const response = await MortgagesApi.getMorgages(params)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})


