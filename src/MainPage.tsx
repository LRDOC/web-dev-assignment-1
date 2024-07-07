import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <div>
            <h1>Liam O'Connor - Web Development Section</h1>
            <nav>
                <ul>
                    <li><a href="https://northeastern.instructure.com/courses/184007/assignments/2270925">Assignment 1</a></li>
                    <li><a href="https://northeastern.instructure.com/courses/184007/assignments/2270926">Assignment 2</a></li>
                    <li><a href="https://northeastern.instructure.com/courses/184007/assignments/2270927">Assignment 3</a></li>
                    <li><a href="https://northeastern.instructure.com/courses/184007/assignments/2270928">Assignment 4</a></li>
                    <li><a href="https://northeastern.instructure.com/courses/184007/assignments/2270929">Assignment 5</a></li>
                    <li><a href="https://northeastern.instructure.com/courses/184007/assignments/2270930">Assignment 6</a></li>
                </ul>
            </nav>
            <section>
                <h2>Kanbas Application</h2>
                <Link to="/kanbas">Go to Kanbas Application</Link>
            </section>
            <section>
                <h2>Source Code Repositories</h2>
                <ul>
                    <li><a href="https://github.com/LRDOC/web-dev-assignment-1">Main Repository</a></li>
                </ul>
            </section>
        </div>
    );
}
