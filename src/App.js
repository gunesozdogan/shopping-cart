import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MWImg from './assets/games/call-of-duty-modern-warfare-2.jpg';
import destiny2Img from './assets/games/destiny-2.jpg';
import dyingLight2Img from './assets/games/dying-light-2.jpg';
import eldenRingImg from './assets/games/elden-ring.jpg';
import fifa2023Img from './assets/games/fifa-2023.jpg';
import lostArkImg from './assets/games/lost-ark.jpg';
import pubgImg from './assets/games/pubg.jpg';
import rustImg from './assets/games/rust.jpg';
import skyrimImg from './assets/games/skyrim.jpg';
import spidermanMilesMoralesImg from './assets/games/spiderman-miles-morales.jpg';
import spidermanRemasteredImg from './assets/games/spiderman-remastered.jpg';
import lastOfUsImg from './assets/games/the-last-of-us-part-1.jpg';

import './App.css';

import { storeActions } from './store/storeSlice';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

export const images = {
    'spiderman-miles-morales': spidermanMilesMoralesImg,
    'spiderman-remastered': spidermanRemasteredImg,
    'fifa-2023': fifa2023Img,
    'the-last-of-us-part-1': lastOfUsImg,
    'call-of-duty-modern-warfare-2': MWImg,
    'destiny-2': destiny2Img,
    'elden-ring': eldenRingImg,
    'rust': rustImg,
    'dying-light-2': dyingLight2Img,
    'pubg': pubgImg,
    'lost-ark': lostArkImg,
    'skyrim': skyrimImg,
};

const getData = async () => {
    const response = await fetch(
        'https://game-field-b452c-default-rtdb.firebaseio.com/games.json'
    );
    const data = await response.json();

    return data;
};

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const setGames = async () => {
            const games = await getData();

            dispatch(storeActions.setGames(games));
        };

        setGames();
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/store" element={<ShopPage />}></Route>
            <Route
                path="/:productID/:productName"
                element={<ProductPage />}
            ></Route>
        </Routes>
    );
}

export default App;
