import {useLocation} from "react-router";
import {Link} from "react-router-dom";

export default function TOC() {
    const {pathname} = useLocation();
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link
                    id="wd-a1"
                    to="/Labs/Lab1"
                    className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
                >
                    Lab 1 - July 8th
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    id="wd-a2"
                    to="/Labs/Lab2"
                    className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
                >
                    Lab 2 - July 15th
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    id="wd-a3"
                    to="/Labs/Lab3"
                    className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
                >
                    Lab 3 - July 22nd
                </Link>
            </li>
            <li className="nav-item">
                <Link id="wd-k" to="/Kanbas" className="nav-link">
                    Kanbas
                </Link>
            </li>
        </ul>
    );
}
