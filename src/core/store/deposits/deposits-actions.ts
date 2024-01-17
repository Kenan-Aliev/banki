import DepositsApi from '@/core/services/Deposits';
import { getDepositsI } from '@/models/Services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDeposits = createAsyncThunk(
	'deposits/getAll',
	async (params: getDepositsI, { rejectWithValue }) => {
		try {
			const response = await DepositsApi.getDeposits(params)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})

export const getMonthOffers = createAsyncThunk(
	'deposits/getMonthOffers',
	async (params: getDepositsI, { rejectWithValue }) => {
		try {
			const response = await DepositsApi.getDeposits(params)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})

export const getSpecialOffers = createAsyncThunk(
	'deposits/getSpecialOffers',
	async (params: getDepositsI, { rejectWithValue }) => {
		try {
			const response = await DepositsApi.getDeposits(params)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})

export const getTopDeposits = createAsyncThunk(
	'deposits/getTopDeposots',
	async (_, { rejectWithValue }) => {
		try {
			const response = await DepositsApi.getTopDeposits()
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})