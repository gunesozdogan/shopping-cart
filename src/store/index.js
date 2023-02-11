import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import gamesReducer from './gamesSlice';

const store = configureStore({
    reducer: { cart: cartReducer, games: gamesReducer },
});

export default store;
