import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Kanbas from './Kanbas';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/kanbas/*" element={<Kanbas />} />
        </Routes>
    );
}

export default App;
