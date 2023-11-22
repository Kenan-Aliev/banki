import { createSlice } from '@reduxjs/toolkit';

interface InitialStateI {}

const initialState: InitialStateI = {};

export const investingSlice = createSlice({
  name: 'investment',
  initialState,
  reducers: {},
});

export default investingSlice.reducer;
