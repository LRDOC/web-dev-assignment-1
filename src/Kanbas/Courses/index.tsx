import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CoursesNavigation from './Navigation';
import Home from './';
import Modules from './Modules';
import Assignments from '../Assignments';
import AssignmentEditor from '../Assignments/Editor';

export default function Courses() {
    return (
        <div id="wd-courses">
            <h2>Course of All Pancakes</h2>
            <hr />
            <table>
                <tbody>
                <tr>
                    <td valign="top">
                        <CoursesNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:id" element={<AssignmentEditor />} />
                        </Routes>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
