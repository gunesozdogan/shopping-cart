import uuid from 'react-uuid';

import milesMoralesImg from '../assets/games/milesMorales.jpg';
import spidermanImg from '../assets/games/spidermanRemastered.jpg';
import lastOfUsImg from '../assets/games/lastOfUs.jpg';
import destinyImg from '../assets/games/destiny2.jpg';
import fifa2023Img from '../assets/games/fifa2023.jpg';
import MW2Img from '../assets/games/MW2.jpg';

import { createSlice } from '@reduxjs/toolkit';

const initialGamesSlice = [
    {
        name: 'Marvel’s Spider-Man: Miles Morales',
        img: milesMoralesImg,
        price: 24,
        discount: 30,
        onSlider: Math.random() < 0.5 ? false : true,
        id: uuid(),
    },
    {
        name: 'Marvel’s Spider-Man Remastered',
        img: spidermanImg,
        price: 24,
        discount: 0,
        onSlider: Math.random() < 0.5 ? false : true,
        id: uuid(),
    },
    {
        name: 'EA SPORTS™ FIFA 23',
        img: fifa2023Img,
        price: 16,
        discount: 12,
        onSlider: Math.random() < 0.5 ? false : true,
        id: uuid(),
    },
    {
        name: 'The Last of Us™ Part I',
        img: lastOfUsImg,
        price: 36,
        discount: 10,
        onSlider: Math.random() < 0.5 ? false : true,
        id: uuid(),
    },
    {
        name: 'Call of Duty®: Modern Warfare® II',
        img: MW2Img,
        price: 50,
        discount: 25,
        onSlider: Math.random() < 0.5 ? false : true,
        id: uuid(),
    },
    {
        name: 'Destiny 2',
        img: destinyImg,
        price: 28,
        discount: 15,
        onSlider: Math.random() < 0.5 ? false : true,
        id: uuid(),
    },
];

const gamesSlice = createSlice({
    name: 'games',
    initialState: initialGamesSlice,
    reducers: {},
});

export const gamesActions = gamesSlice.actions;

export default gamesSlice.reducer;
