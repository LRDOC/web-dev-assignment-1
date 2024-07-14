import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { FaBookOpen, FaCog } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
import { BsPeople, BsFillGrid3X3GapFill } from 'react-icons/bs';
import './CoursesNavigation.css';

export default function CoursesNavigation() {
    return (
        <div className="courses-sidebar">
            <Link to="/Kanbas/Courses/Home">
                <span className="icon"><AiOutlineHome /></span> Home
            </Link>
            <Link to="/Kanbas/Courses/Modules">
                <span className="icon"><BsFillGrid3X3GapFill /></span> Modules
            </Link>
            <Link to="/Kanbas/Courses/Piazza">
                <span className="icon"><FaBookOpen /></span> Piazza
            </Link>
            <Link to="/Kanbas/Courses/Zoom">
                <span className="icon"><IoCalendarOutline /></span> Zoom
            </Link>
            <Link to="/Kanbas/Courses/Assignments">
                <span className="icon"><FaBookOpen /></span> Assignments
            </Link>
            <Link to="/Kanbas/Courses/Quizzes">
                <span className="icon"><FaBookOpen /></span> Quizzes
            </Link>
            <Link to="/Kanbas/Courses/Grades">
                <span className="icon"><FaBookOpen /></span> Grades
            </Link>
            <Link to="/Kanbas/Courses/People">
                <span className="icon"><BsPeople /></span> People
            </Link>
            <Link to="/Kanbas/Courses/Settings">
                <span className="icon"><FaCog /></span> Settings
            </Link>
        </div>
    );
}
