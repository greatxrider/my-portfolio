import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { NavLink, Outlet } from 'react-router-dom';

const Portfolio = () => {
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
                    <h3>10</h3>
                    <p>Years of Experience</p>
                </div>
                <div className="stats-item projects-completed">
                    <h3>200</h3>
                    <p>Projects Completed</p>
                </div>
                <div className="stats-item happy-clients">
                    <h3>140</h3>
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
                <Outlet />
            </div>
            {/* <div className="portfolio-more">
                <button className="more-button">See More</button>
            </div> */}
        </div>
    );
}

export default Portfolio;
