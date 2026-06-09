import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';

import { storeActions } from './store/storeSlice';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

const getData = async () => {
    const response = await fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=40&ordering=-rating&metacritic=80,100`
    );
    const data = await response.json();

    return data.results.map(game => ({
        id: String(game.id),
        name: game.name,
        urlName: game.slug,
        image: game.background_image,
        price: Number((((game.id % 40) + 20) + 0.99).toFixed(2)),
        discount: game.id % 3 === 0 ? (game.id % 30) + 10 : 0,
        tags: game.genres.map(g => g.name),
        description: '',
    }));
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
            <Route path="/shopping-cart" element={<Navigate to="/" />}></Route>
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