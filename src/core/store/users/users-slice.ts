import { createSlice } from '@reduxjs/toolkit';
import { sendApplication } from './users-actions';
import { RequestStatus } from '@/models/Services';

interface InitialStateI {
	sendRequest: {
		status: RequestStatus
	}
}

const initialState: InitialStateI = {
	sendRequest: {
		status: 'initial'
	}
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.
			addCase(sendApplication.fulfilled, (state, action) => {
				state.sendRequest.status = 'success'
			})
			.addCase(sendApplication.pending, (state) => {
				state.sendRequest.status = 'loading'
			})
			.addCase(sendApplication.rejected, (state) => {
				state.sendRequest.status = 'error'
			})
	}
});


export default usersSlice.reducer;
