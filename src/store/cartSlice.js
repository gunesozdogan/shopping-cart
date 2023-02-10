import { createSlice } from '@reduxjs/toolkit';

const initialCartState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
