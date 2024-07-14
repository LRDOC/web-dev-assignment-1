import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Courses/Home';
import Account from './Account';
import Calendar from './Calendar';
import Inbox from './Inbox';
import Sidebar from './Navigation/Sidebar';
import './styles.css'; // Import the new styles

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <Sidebar />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<Account />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/Home" element={<Home />} />
                    <Route path="Calendar" element={<Calendar />} />
                    <Route path="Inbox" element={<Inbox />} />
                </Routes>
            </div>
        </div>
    );
}
