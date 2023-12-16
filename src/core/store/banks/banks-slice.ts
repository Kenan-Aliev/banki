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

export const { resetBanks } = banksSlice.actions

export default banksSlice.reducer;
