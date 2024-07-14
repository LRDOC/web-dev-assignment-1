import React from 'react';
import { Link } from 'react-router-dom';
import './Modules.css';

export default function Modules() {
    return (
        <div id="wd-modules" className="container">
            <h2 className="modules-title">Modules</h2>
            <hr />
            <div className="list-group">
                <Link to="#" className="list-group-item list-group-item-action">Module 1: Introduction to Pancakes</Link>
                <Link to="#" className="list-group-item list-group-item-action">Module 2: History of Pancakes</Link>
                <Link to="#" className="list-group-item list-group-item-action">Module 3: Types of Pancakes</Link>
                <Link to="#" className="list-group-item list-group-item-action">Module 4: Cooking Techniques</Link>
                <Link to="#" className="list-group-item list-group-item-action">Module 5: Pancake Toppings</Link>
                <Link to="#" className="list-group-item list-group-item-action">Module 6: Pancake Serving Ideas</Link>
            </div>
        </div>
    );
}
