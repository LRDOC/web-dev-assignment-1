import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Courses/Home';
import Account from './Account';
import Calendar from './Calendar';
import Inbox from './Inbox';

function Kanbas() {
    return (
        <div className="kanbas-content">
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<Account />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/Home" element={<Home />} />
                <Route path="Calendar" element={<Calendar />} />
                <Route path="Inbox" element={<Inbox />} />
            </Routes>
        </div>
    );
}

export default Kanbas;
