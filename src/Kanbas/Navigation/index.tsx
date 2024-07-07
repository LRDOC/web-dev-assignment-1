import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/kanbas/Dashboard">Dashboard</Link></li>
                <li><Link to="/kanbas/Courses">Courses</Link></li>
                <li><Link to="/kanbas/Account">Account</Link></li>
                <li><Link to="/kanbas/Calendar">Calendar</Link></li>
                <li><Link to="/kanbas/Inbox">Inbox</Link></li>
                <li><Link to="/kanbas/Labs">Labs</Link></li>
            </ul>
        </nav>
    );
}
