import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { NavLink, Outlet } from 'react-router-dom';

const Portfolio = ({ categories }) => {
    return (
        <div className="portfolio-content">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="portfolio-stats">
                <div className="stats-item intime-projects-container">
                    <div className="intime-projects">
                        <FontAwesomeIcon icon={faClock} style={{ color: '#FEC107' }} />
                        <p>In Time Projects</p>
                    </div>
                </div>
                <div className="stats-item years-experience">
                    <h3>1</h3>
                    <p>Years of Experience</p>
                </div>
                <div className="stats-item projects-completed">
                    <h3>21</h3>
                    <p>Projects Completed</p>
                </div>
                <div className="stats-item happy-clients">
                    <h3>8</h3>
                    <p>Happy Clients</p>
                </div>
                <div className="stats-item project-done-container">
                    <div className="project-done">
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#1777E5' }} />
                        <p>Project Done</p>
                    </div>
                </div>
            </div>
            <div className="portfolio-description">
                <p>
                    Explore my projects showcasing expertise in web and mobile app development,
                    design, and software solutions.
                </p>
            </div>
            <div className="portfolio-filters">
                <NavLink to='all' className="filter-button all">All</NavLink>
                <NavLink to='uiux' className="filter-button uiux">UI/UX</NavLink>
                <NavLink to='web' className="filter-button webdev">Web Development</NavLink>
                <NavLink to='mobile' className="filter-button mobileapp">Mobile App Development</NavLink>
            </div>
            <div className="portfolio-gallery">
                {categories && categories.length > 0 ? (
                    <Outlet />
                ) : (
                    <p>No projects available.</p>
                )}
            </div>
        </div>
    );
}

export default Portfolio;
