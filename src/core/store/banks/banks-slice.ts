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
	reducers: {},
	extraReducers: (builder) => {
		builder.
			addCase(getBanks.fulfilled, (state, action) => {
				state.banks = {
					status: 'success',
					data: {
						...action.payload,
						deposits: [...state.banks.data.banks ?? [], ...action.payload.banks ?? []]
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

export default banksSlice.reducer;
