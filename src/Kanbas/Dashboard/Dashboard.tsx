import { Link } from "react-router-dom";
import db from "../Database";

export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">
                Published Courses ({courses.length})
            </h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="wd-dashboard-course col" style={{ width: "270px" }}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                                <div className="card rounded-3 overflow-hidden h-100">
                                    <img
                                        src={`/images/classes/${course.image}`}
                                        alt={course.name}
                                        height="160"
                                    />
                                    <div className="card-body">
                                        <span
                                            className="wd-dashboard-course-link"
                                            style={{
                                                textDecoration: "none",
                                                color: "blue",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {course.name}
                                        </span>
                                        <p
                                            className="wd-dashboard-course-title card-text"
                                            style={{ maxHeight: 53, overflow: "hidden" }}
                                        >
                                            {course.description}
                                        </p>
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                            Go
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


// Photo Credits
// Rocket: https://bigthink.com/hard-science/spacex-raptor-engine-methane/
// Aerodynamics: https://www.nasa.gov/centers/armstrong/news/FactSheets/FS-052-DFRC.html
// Spacecraft Design: https://www.starwars.com/databank/x-wing-starfighter
// Orgo: https://www.yalescientific.org/2013/12/the-chemistry-behind-breaking-bad/
// inorganic: https://www.sciencedirect.com/topics/earth-and-planetary-sciences/inorganic-chemistry
// physical: https://www.kemi.dtu.dk/english/nyheder/nyhed?id=45138ee8-9180-4fc3-abd3-5b9f04860ff4
// Middle-Earth: https://fineartamerica.com/featured/1-gandalf-pipe-gandalf-pipe.html
// Diplomacy: https://www.dicebreaker.com/games/magic-the-gathering-game/news/every-fellowship-of-the-ring-card-in-mtg
// Middle-Earth History: https://concerninghistory.org/general/the-historical-middle-earth-men-of-the-west/
// Independence: https://fedcapgroup.org/independence-interdependence-and-self-sufficiency/
// Christian Ethics: https://goodfaithmedia.org/when-can-you-bend-christian-ethics-historically-it-depends/
// Early Christianity: https://www.christianity.com/church/church-history/a-look-at-the-early-church-11629559.html
// Christianity Leadership: https://www.npr.org/sections/thetwo-way/2014/04/24/306515332/pope-oks-communion-for-the-divorced-not-so-fast-vatican-says
// Sufi: https://aeon.co/ideas/every-sufi-master-is-a-kind-of-freudian-psychotherapist
// Islamic Teachings: https://mominbazaar.com/blogs/education/islamic-teachings
// Islamic Esotericism: https://www.newageislam.com/islamic-society/dr-muhammad-maroof-shah/opposing-sufism-entails-rejecting-esotericism-principle/d/122887
// Environmental Management: https://www.fao.org/giahs/giahsaroundtheworld/designated-sites/asia-and-the-pacific/rice-terraces-systems-in-subtropical-china/en/
// Leadership Chinese Myths: https://mythologysource.com/jade-emperor/
// Hydraulics Eng: https://www.britannica.com/summary/aqueduct-engineering
// 19th: https://history.princeton.edu/fields/us-19th-century