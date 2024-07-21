import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
// import Lab3 from "./Lab3"; //

export default function Labs() {
        return (
            <div id="wd-labs">
                    <h2>Liam OConnor, Section 01</h2>
                    <h3></h3>
                    <TOC/>
                    <Routes>
                            <Route path="/" element={<Navigate to="Labs"/>}/>
                            <Route path="Lab1" element={<Lab1/>}/>
                            <Route path="Lab2" element={<Lab2/>}/>
                            {/*<Route path="Lab3" element={<Lab3/>}/>*/}
                    </Routes>
            </div>
        );
}