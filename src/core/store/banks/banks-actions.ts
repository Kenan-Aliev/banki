import BanksApi from '@/core/services/Banks';
import DepositsApi from '@/core/services/Deposits';
import { getAllBanksT, getDepositsI } from '@/models/Services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getBanks = createAsyncThunk(
	'banks/getAll',
	async (params: getAllBanksT, { rejectWithValue }) => {
		try {
			const response = await BanksApi.getBanks(params)
			return { offset: params.offset, data: response.data }
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})


export const getBankDetails = createAsyncThunk(
	'banks/getDetails',
	async (bankID: number, { rejectWithValue }) => {
		try {
			const response = await BanksApi.getBank(bankID)
			return response.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.message)
		}
	})