import { createSlice } from '@reduxjs/toolkit';

// Generetes slider games randomly
const getSliderGameIndexes = () => {
    const indexes = new Set();

    while (indexes.size !== Math.round(12 / 2)) {
        indexes.add(Math.floor(Math.random() * 12));
    }

    return [...indexes];
};

const sliderGameIndexes = getSliderGameIndexes();

const storeSlice = createSlice({
    name: 'games',
    initialState: {
        games: [],
        sliderGames: [],
        displayedGames: [],
    },
    reducers: {
        setGames(state, action) {
            state.games = action.payload;

            if (!state.sliderGames.length) {
                state.sliderGames = sliderGameIndexes.map(
                    index => action.payload[index]
                );
            }

            state.displayedGames = state.displayedGames.length
                ? state.displayedGames
                : state.games;
        },

        nextSlide(state, action) {
            state.sliderGames.unshift(state.sliderGames.pop());
        },

        prevSlide(state) {
            state.sliderGames.push(state.sliderGames.shift());
        },

        changeDisplayedGames(state, action) {
            if (action.payload === 'All') state.displayedGames = state.games;
            else {
                const displayedGames = [];
                state.games.forEach(game => {
                    if (game.tags.includes(action.payload))
                        displayedGames.push(game);
                });

                state.displayedGames = displayedGames;
            }
        },
    },
});

export const storeActions = storeSlice.actions;

export default storeSlice.reducer;
