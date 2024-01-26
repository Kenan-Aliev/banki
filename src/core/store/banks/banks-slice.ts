import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '@/models/Services';
import { BankT, BanksResponseT } from '@/models/Banks/banks';
import { getBanks, getBankDetails } from './banks-actions';

interface InitialStateI {
	banks: {
		status: RequestStatus,
		data: BanksResponseT,
	},
	bankDetails: {
		status: RequestStatus
		data: BankT
	}
}

const initialState: InitialStateI = {
	banks: {
		status: 'initial',
		data: {} as BanksResponseT
	},
	bankDetails: {
		status: 'initial',
		data: {} as BankT
	}
};

export const banksSlice = createSlice({
	name: 'banks',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.
			addCase(getBanks.fulfilled, (state, action) => {
				if (action.payload.offset === 0) {
					state.banks = {
						status: 'success',
						data: {
							count: action.payload.data.count,
							results: action.payload.data.results
						}
					}
				}
				else {
					state.banks = {
						status: 'success',
						data: {
							count: action.payload.data.count,
							results: [...state.banks.data.results ?? [], ...action.payload.data.results ?? []]
						}
					}
				}
			})
			.addCase(getBanks.pending, (state) => {
				state.banks.status = 'loading'
			})
			.addCase(getBanks.rejected, (state) => {
				state.banks.status = 'error'
			}),

			builder.
				addCase(getBankDetails.fulfilled, (state, action) => {
					state.bankDetails = {
						status: 'success',
						data: action.payload
					}
				})
				.addCase(getBankDetails.pending, (state) => {
					state.bankDetails.status = 'loading'
				})
				.addCase(getBankDetails.rejected, (state) => {
					state.bankDetails.status = 'error'
				})
	}
});

export default banksSlice.reducer;
