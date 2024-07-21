import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const assignments = [
    { id: 1, title: "P1 - Gather Ingredients" },
    { id: 2, title: "P2 - Mix Ingredients" },
    { id: 3, title: "P3 - Cook Pancakes" },
    { id: 4, title: "P4 - Serve Pancakes" },
    { id: 5, title: "P5 - Cleanup" },
];

export default function Assignments() {
    return (
        <div id="wd-assignments" className="container">
            <h2 className="assignment-header">PANCAKE ASSIGNMENTS 40% of Total</h2>
            <div className="assignment-controls">
                <input type="text" placeholder="Search for Assignments" className="form-control" />
                <button className="btn btn-outline-secondary">Group</button>
                <button className="btn btn-outline-secondary">Assignment</button>
                <button className="btn btn-outline-secondary">+</button>
            </div>
            <ul className="list-group">
                {assignments.map(assignment => (
                    <li key={assignment.id} className="list-group-item">
                        <Link to={`/Kanbas/Courses/Assignments/${assignment.id}`}>{assignment.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
