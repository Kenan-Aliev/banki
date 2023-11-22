import { createSlice } from '@reduxjs/toolkit';

interface InitialStateI {}

const initialState: InitialStateI = {};

export const depositsSlice = createSlice({
  name: 'deposits',
  initialState,
  reducers: {},
});

export default depositsSlice.reducer;
