import {createSlice} from '@reduxjs/toolkit';
import {SlideItemT} from '@/models/business/Business';

interface IInitialState {
    slideItems: SlideItemT[];
}

const initialState: IInitialState = {
    slideItems: [],
};

export const businessSlice = createSlice({
    name: 'business',
    initialState,
    reducers: {},
});

export default businessSlice.reducer;
