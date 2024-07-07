import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Courses/Home';
import Account from './Account';
import Calendar from './Calendar';
import Inbox from './Inbox';

export default function Kanbas() {
    return (
        <div id="wd-kanbas" style={{ marginLeft: '200px' }}>
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/Home" element={<Home />} />
                <Route path="Account" element={<Account />} />
                <Route path="Calendar" element={<Calendar />} />
                <Route path="Inbox" element={<Inbox />} />
            </Routes>
        </div>
    );
}
