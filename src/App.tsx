import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Labs from './Kanbas/Labs';
import Kanbas from './Kanbas';
import Sidebar from './Kanbas/Navigation';

function App() {
    return (
        <HashRouter>
            <div className="app-container">
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/Kanbas/Dashboard" />} />
                        <Route path="/Labs/*" element={<Labs />} />
                        <Route path="/Kanbas/*" element={<Kanbas />} />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
