import { createSlice } from '@reduxjs/toolkit';

interface initialStateI {}

const initialState: initialStateI = {};

export const creditsSlice = createSlice({
  name: 'credits',
  initialState,
  reducers: {},
});

export default creditsSlice.reducer;
