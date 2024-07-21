import React, { useState } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Kanbas from './Kanbas';
import Sidebar from './Kanbas/Navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Modules from "./Kanbas/Courses/Modules";

function App() {
    const [showHome, setShowHome] = useState(true);

    const handleNavigate = (path: string) => {
        setShowHome(false);
        window.location.hash = path;
    };

    return (
        <HashRouter>
            {showHome ? (
                <div className="home-page">
                    <h1>Liam O'Connor - Web Development CS5610.61065.202460</h1>
                    <div className="buttons">
                        <button className="btn btn-primary" onClick={() => handleNavigate('/Labs/Lab1')}>Labs</button>
                        <button className="btn btn-primary" onClick={() => handleNavigate('/Kanbas/Dashboard')}>Kanbas</button>
                    </div>
                </div>
            ) : (
                <div id="main-container" className="container-fluid app-container">
                    <Sidebar />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Navigate to="/Labs/" />} />
                            <Route path="/Labs/*" element={<Modules />} />
                            <Route path="/Kanbas/*" element={<Kanbas />} />

                        </Routes>
                    </div>
                </div>
            )}
        </HashRouter>
    );
}

export default App;
