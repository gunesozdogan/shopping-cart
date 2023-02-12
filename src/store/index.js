import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import storeReducer from './storeSlice';

const store = configureStore({
    reducer: { cart: cartReducer, store: storeReducer },
});

export default store;
