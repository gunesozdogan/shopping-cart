import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';

import { storeActions } from './store/storeSlice';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

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
            <Route path="/shopping-cart" element={<HomePage />}></Route>
            <Route path="/store" element={<ShopPage />}></Route>
            <Route
                path="/:productID/:productName"
                element={<ProductPage />}
            ></Route>
        </Routes>
    );
}

export default App;
