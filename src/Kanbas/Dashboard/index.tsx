import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Published Courses (12)</h2>
            <div>
                <img src="path/to/image.jpg" alt="Course Thumbnail" />
                <Link to="/Kanbas/Courses/CS1234">CS1234 React JS</Link>
                <p>Full Stack software developer</p>
                <Link to="/Kanbas/Courses/CS1234">Go</Link>
            </div>
        </div>
    );
}
