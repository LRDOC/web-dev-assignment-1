import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Labs from './Kanbas/Labs';
import Kanbas from './Kanbas';
import Navigation from './Kanbas/Navigation';

function App() {
    return (
        <HashRouter>
            <div className="app-container">
                <h2>Navigation</h2>
                <Navigation/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/Kanbas/Dashboard"/>}/>
                        <Route path="/Labs/*" element={<Labs/>}/>
                        <Route path="/Kanbas/*" element={<Kanbas/>}/>
                    </Routes>
                </div>
                <section>
                    <h2>Source Code Repositories</h2>
                    <ul>
                        <li><a href="https://github.com/LRDOC/web-dev-assignment-1">Repository</a></li>
                    </ul>
                </section>
            </div>
        </HashRouter>
    );
}

export default App;
