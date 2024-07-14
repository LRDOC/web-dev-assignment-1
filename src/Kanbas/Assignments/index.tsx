import React from 'react';
import './assignments.css';

interface Assignment {
    title: string;
    description: string;
}

const assignments: Record<number, Assignment> = {
    1: { title: 'Gather Ingredients', description: 'Gather all the necessary ingredients for making pancakes.' },
    2: { title: 'Mix Ingredients', description: 'Mix all the ingredients to prepare the pancake batter.' },
    3: { title: 'Cook Pancakes', description: 'Cook the pancakes on a hot griddle.' },
    4: { title: 'Serve Pancakes', description: 'Serve the pancakes with your favorite toppings.' },
    5: { title: 'Cleanup', description: 'Clean up the kitchen after making pancakes.' }
};

export default function Assignments() {
    return (
        <div id="assignments-section">
            <div>
                <input type="text" placeholder="Search for Assignments" />
                <select>
                    <option>Group</option>
                    <option>Assignment</option>
                </select>
                <button className="btn btn-primary">+</button>
            </div>
            <h3>PANCAKE ASSIGNMENTS 40% of Total</h3>
            <ul>
                {Object.keys(assignments).map((key) => (
                    <li key={key}>
                        <a href="#">{assignments[Number(key)].title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
