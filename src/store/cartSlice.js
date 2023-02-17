import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    isDisplayed: false,
    games: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        switchDisplay(state) {
            state.isDisplayed = !state.isDisplayed;
        },

        add(state, action) {
            state.games.push(action.payload);
        },

        remove(state, action) {
            state.games = state.games.filter(
                game => game.name !== action.payload.name
            );
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
