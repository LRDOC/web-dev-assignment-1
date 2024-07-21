import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Modules from './Modules';
import Assignments from './Assignments';
import Grades from './Grades';
import AssignmentEditor from './Assignments/Editor';
import Sidebar from "../Navigation/Sidebar";

export default function Courses() {
    return (
        <div id="wd-courses">
            <h2 className="course-title">Course of All Pancakes</h2>
            <hr />
            <div className="courses-container">
                <div className="courses-sidebar">
                    <Sidebar />
                </div>
                <div className="courses-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h2>Piazza</h2>} />
                        <Route path="Zoom" element={<h2>Zoom</h2>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:id" element={<AssignmentEditor />} />
                        <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
