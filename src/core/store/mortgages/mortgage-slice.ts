import { createSlice } from '@reduxjs/toolkit';

interface InitialStateI {}

const initialState: InitialStateI = {};

export const mortgageSlice = createSlice({
  name: 'mortgage',
  initialState,
  reducers: {},
});

export default mortgageSlice.reducer;
