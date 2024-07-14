import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/Kanbas/Dashboard"> Dashboard</Link>
            <Link to="/Kanbas/Courses"> Courses</Link>
            <Link to="/Kanbas/Account"> Account</Link>
            <Link to="/Kanbas/Calendar"> Calendar</Link>
            <Link to="/Kanbas/Inbox"> Inbox</Link>
            <Link to="/Kanbas/Settings"> Settings</Link>
        </div>
    );
}
