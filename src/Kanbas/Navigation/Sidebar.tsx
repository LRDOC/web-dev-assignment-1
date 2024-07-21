import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function Sidebar() {
    return (
        <div
            id="wd-kanbas-navigation"
            className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
        >
            <a
                id="wd-neu-link"
                target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0"
            >
                <img src="/public/NEU.png" width="75px" alt="Northeastern" />
            </a>
            <Link
                id="wd-account-link"
                to="/Kanbas/Account"
                className="list-group-item text-white bg-black text-center border-0"
            >
                <FaRegCircleUser className="fs-1 text text-white" />
                <br />
                Account
            </Link>
            <Link
                id="wd-dashboard-link"
                to="/Kanbas/Dashboard"
                className="list-group-item text-center border-0 bg-white text-danger"
            >
                <AiOutlineDashboard className="fs-1 text-danger" />
                <br />
                Dashboard
            </Link>
            <Link
                id="wd-course-link"
                to="/Kanbas/Courses"
                className="list-group-item text-white bg-black text-center border-0"
            >
                <LiaBookSolid className="fs-1 text-danger" />
                <br />
                Courses
            </Link>
            <Link
                id="wd-calendar-link"
                to="/Kanbas/Calendar"
                className="list-group-item text-white bg-black text-center border-0"
            >
                <IoCalendarOutline className="fs-1 text-danger" />
                <br />
                Calendar
            </Link>
            <Link
                id="wd-inbox-link"
                to="/Kanbas/Inbox"
                className="list-group-item text-white bg-black text-center border-0"
            >
                <FaInbox className="fs-1 text-danger" />
                <br />
                Inbox
            </Link>
            <Link
                id="wd-labs-link"
                to="/Labs"
                className="list-group-item text-white bg-black text-center border-0"
            >
                <LiaCogSolid className="fs-1 text-danger" />
                <br />
                Labs
            </Link>
        </div>
    );
}
