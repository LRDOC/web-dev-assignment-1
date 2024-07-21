import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Account from './Courses/Account';
import './Kanbas.css';
import Courses from "./Courses";

function Kanbas() {
    return (
        <div className="kanbas-content">
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<Account />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/:id" element={<Courses />} />
            </Routes>
        </div>
    );
}

export default Kanbas;
