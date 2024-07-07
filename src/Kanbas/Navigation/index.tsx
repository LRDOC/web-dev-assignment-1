import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="sidebar">
            <ul>
                <li><Link to="https://www.northeastern.edu">Northeastern</Link></li>
                <li><Link to="/Kanbas/Account">Account</Link></li>
                <li><Link to="/Kanbas/Dashboard">Dashboard</Link></li>
                <li><Link to="/Kanbas/Courses/Home">Courses</Link></li>
                <li><Link to="/Kanbas/Calendar">Calendar</Link></li>
                <li><Link to="/Kanbas/Inbox">Inbox</Link></li>
                <li><Link to="/Labs/Lab1">Labs</Link></li>
            </ul>
        </nav>
    );
}
