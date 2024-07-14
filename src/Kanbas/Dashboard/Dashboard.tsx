import React from 'react';
import './dashboard.css';

const courses = [
    { id: 1, title: "CS1234 React JS", term: "Fall 2024", section: "Section 1", color: "#007bff" },
    { id: 2, title: "CS5678 Node.js", term: "Fall 2024", section: "Section 2", color: "#6c757d" },
    { id: 3, title: "CS4321 Angular", term: "Fall 2024", section: "Section 3", color: "#17a2b8" },
    { id: 4, title: "CS8765 Vue.js", term: "Fall 2024", section: "Section 4", color: "#28a745" },
    { id: 5, title: "CS5678 Python", term: "Fall 2024", section: "Section 2", color: "#dc3545" },
    { id: 6, title: "CS4321 Django", term: "Fall 2024", section: "Section 3", color: "#ffc107" },
    { id: 7, title: "CS8765 Flask", term: "Fall 2024", section: "Section 4", color: "#343a40" }
];

export default function Dashboard() {
    return (
        <div id="wd-dashboard" className="container">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {courses.map(course => (
                    <div key={course.id} className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark" href={`#/Kanbas/Courses/${course.id}/Home`}>
                                <div className="card-img-top" style={{ backgroundColor: course.color, height: "150px" }}></div>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">{course.title}</h5>
                                    <p className="card-text">{course.term} {course.section}</p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
