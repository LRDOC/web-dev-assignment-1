import React from 'react';
import './grades.css';

interface Grade {
    name: string;
    dueDate: string;
    status: string;
    grade: string;
}

const grades: Grade[] = [
    { name: 'Assignment 1', dueDate: '2024-07-10', status: 'Submitted', grade: 'A' },
    { name: 'Assignment 2', dueDate: '2024-07-17', status: 'Not Submitted', grade: '-' },
    { name: 'Assignment 3', dueDate: '2024-07-24', status: 'Graded', grade: 'B+' },
    { name: 'Assignment 4', dueDate: '2024-07-31', status: 'Submitted', grade: 'A-' },
    { name: 'Assignment 5', dueDate: '2024-08-07', status: 'Not Submitted', grade: '-' },
];

export default function Grades() {
    return (
        <div id="grades-section">
            <h2>Grades</h2>
            <table className="grades-table">
                <thead>
                <tr>
                    <th>Assignment Name</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Grade</th>
                </tr>
                </thead>
                <tbody>
                {grades.map((grade, index) => (
                    <tr key={index}>
                        <td>{grade.name}</td>
                        <td>{grade.dueDate}</td>
                        <td>{grade.status}</td>
                        <td>{grade.grade}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
