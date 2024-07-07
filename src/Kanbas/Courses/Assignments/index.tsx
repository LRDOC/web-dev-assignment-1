import React from 'react';
import { Link } from 'react-router-dom';

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment" placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link className="wd-assignment-link" to="123">
                        A1 - ENV + HTML
                    </Link>
                </li>
                <li className="wd-assignment-list-item">
                    <Link className="wd-assignment-link" to="124">
                        A2 - CSS Basics
                    </Link>
                </li>
                <li className="wd-assignment-list-item">
                    <Link className="wd-assignment-link" to="125">
                        A3 - JavaScript Introduction
                    </Link>
                </li>
                {/* Add more when needed?*/}
            </ul>
        </div>
    );
}
