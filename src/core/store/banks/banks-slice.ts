import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '@/models/Services';
import { BanksResponseT } from '@/models/Banks/banks';
import { getBanks } from './banks-actions';

interface InitialStateI {
	banks: {
		status: RequestStatus,
		data: BanksResponseT,
	}
}

const initialState: InitialStateI = {
	banks: {
		status: 'initial',
		data: {} as BanksResponseT
	}
};

export const banksSlice = createSlice({
	name: 'banks',
	initialState,
	reducers: {
		resetBanks: (state) => {
			state.banks.data = {} as BanksResponseT
		}
	},
	extraReducers: (builder) => {
		builder.
			addCase(getBanks.fulfilled, (state, action) => {
				state.banks = {
					status: 'success',
					data: {
						...action.payload,
						results: [...state.banks.data.results ?? [], ...action.payload.results ?? []]
					}
				}
			})
			.addCase(getBanks.pending, (state) => {
				state.banks.status = 'loading'
			})
			.addCase(getBanks.rejected, (state) => {
				state.banks.status = 'error'
			})
	}
});

export const { resetBanks } = banksSlice.actions

export default banksSlice.reducer;
