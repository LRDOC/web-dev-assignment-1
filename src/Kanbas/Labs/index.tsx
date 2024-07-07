import { Route, Routes, Navigate } from 'react-router-dom';
import Lab1 from '../Assignments/Lab1';
import TOC from '../../Modules/TOC';

export default function Labs() {
    return (
        <div>
            <h1>Labs</h1>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
            </Routes>
        </div>
    );
}
