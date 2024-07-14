// src/Kanbas/Courses/index.tsx

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CoursesNavigation from '../Navigation/CoursesNavigation';
import Home from './Home';
import Modules from './Modules';
import Assignments from '../Assignments';
import Grades from '../Grades';
import AssignmentEditor from '../Assignments/Editor';
import './courses.css';

export default function Courses() {
    return (
        <div id="wd-courses">
            <h2 className="course-title">Course of All Pancakes</h2>
            <hr />
            <div className="courses-container">
                <div className="courses-sidebar">
                    <CoursesNavigation />
                </div>
                <div className="courses-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:id" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
