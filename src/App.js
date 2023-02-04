import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";

function App() {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}></Route>
            <Route></Route>
        </Routes>
    );
}

export default App;
