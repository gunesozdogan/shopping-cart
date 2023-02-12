import { createSlice } from '@reduxjs/toolkit';

// Generetes slider games randomly
const getSliderGameIndexes = () => {
    const indexes = new Set();

    while (indexes.size !== Math.round(8 / 2)) {
        indexes.add(Math.floor(Math.random() * 6));
    }

    return [...indexes];
};

const sliderGameIndexes = getSliderGameIndexes();

const storeSlice = createSlice({
    name: 'games',
    initialState: {
        games: [],
        sliderGames: [],
    },
    reducers: {
        setGames(state, action) {
            state.games = action.payload;
            state.sliderGames = sliderGameIndexes.map(
                index => action.payload[index]
            );
        },

        nextSlide(state, action) {
            state.sliderGames.unshift(state.sliderGames.pop());
        },

        prevSlide(state) {
            state.sliderGames.push(state.sliderGames.shift());
        },
    },
});

export const storeActions = storeSlice.actions;

export default storeSlice.reducer;
