import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Courses from './Courses';
import Account from './Account';
import Calendar from './Calendar';
import Inbox from './Inbox';
import Labs from './Labs';
import Navigation from './Navigation';

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <Link to="/">Back to Main Page</Link> {/* Back Button */}
            <Navigation />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/*" element={<Courses />} />
                <Route path="Account" element={<Account />} />
                <Route path="Calendar" element={<Calendar />} />
                <Route path="Inbox" element={<Inbox />} />
                <Route path="Labs" element={<Labs />} />
            </Routes>
        </div>
    );
}
