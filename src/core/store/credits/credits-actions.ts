import CreditsApi from '@/core/services/Credits';
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


export const getCreditTypes = createAsyncThunk(
	'credits/getTypes',
	async (_, { rejectWithValue }) => {
		try {
			const response = await CreditsApi.getCreditTypes()
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})

export const getMonthOffers = createAsyncThunk(
	'credits/getMonthOffers',
	async (params: getCreditsI, { rejectWithValue }) => {
		try {
			const response = await CreditsApi.getCredits(params)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})


export const getCreditDetails = createAsyncThunk(
	'credits/getDetails',
	async (creditId: number, { rejectWithValue }) => {
		try {
			const response = await CreditsApi.getCreditDetails(creditId)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})

export const getTopCredits = createAsyncThunk(
	'credits/getTopCredits',
	async (_, { rejectWithValue }) => {
		try {
			const response = await CreditsApi.getTopCredits()
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})

