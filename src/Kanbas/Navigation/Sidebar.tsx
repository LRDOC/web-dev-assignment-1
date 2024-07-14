import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard } from 'react-icons/ai';
import { IoCalendarOutline } from 'react-icons/io5';
import { LiaBookSolid, LiaCogSolid } from 'react-icons/lia';
import { FaInbox, FaRegCircleUser } from 'react-icons/fa6';
import './Navigation.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/Kanbas/Dashboard">
                <span className="icon"><AiOutlineDashboard /></span> Dashboard
            </Link>
            <Link to="/Kanbas/Courses">
                <span className="icon"><LiaBookSolid /></span> Courses
            </Link>
            <Link to="/Kanbas/Account">
                <span className="icon"><FaRegCircleUser /></span> Account
            </Link>
            <Link to="/Kanbas/Calendar">
                <span className="icon"><IoCalendarOutline /></span> Calendar
            </Link>
            <Link to="/Kanbas/Inbox">
                <span className="icon"><FaInbox /></span> Inbox
            </Link>
            <Link to="/Kanbas/Settings">
                <span className="icon"><LiaCogSolid /></span> Settings
            </Link>
        </div>
    );
}
