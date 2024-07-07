import React from 'react';
import { Link } from 'react-router-dom';

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment" placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                PANCAKE ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link className="wd-assignment-link" to="1">
                        P1 - Gather Ingredients
                    </Link>
                </li>
                <li className="wd-assignment-list-item">
                    <Link className="wd-assignment-link" to="2">
                        P2 - Mix Ingredients
                    </Link>
                </li>
                <li className="wd-assignment-list-item">
                    <Link className="wd-assignment-link" to="3">
                        P3 - Cook Pancakes
                    </Link>
                </li>
                <li className="wd-assignment-list-item">
                    <Link className="wd-assignment-link" to="4">
                        P4 - Serve Pancakes
                    </Link>
                </li>
                <li className="wd-assignment-list-item">
                    <Link className="wd-assignment-link" to="5">
                        P5 - Cleanup
                    </Link>
                </li>
            </ul>
        </div>
    );
}
