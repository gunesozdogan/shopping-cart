import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/store" element={<ShopPage />}></Route>
        </Routes>
    );
}

export default App;
