import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

function App() {
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
