import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";

// Components
import Work from "./Work";
import Education from "./Education";
import Technologies from "./Technologies";

const Experiences = () => {
    return (
        <div className="experience-content">
            <h1 className="experience-title">Experiences & Education</h1>
            <div className="career-card-item">
                <div className="avatar-container">
                    <svg className="bd-placeholder-img rounded-circle" width="120" height="120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Avatar" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Avatar</title>
                        <image href="/src/app/assets/png/avatar2.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="circle(50%)" />
                    </svg>
                </div>
                <div className="experience-details">
                    <h5>Full Stack Developer</h5>
                    <p>I specialize in Full Stack Development, encompassing front-end and back-end expertise. My focus is on creating robust web applications and native mobile apps that deliver seamless user experiences. I excel in UI/UX design, ensuring intuitive interfaces that blend functionality with elegance.</p>
                </div>
                <div className="experience-actions">
                    <button className="experience-request-button">
                        Request Quotation
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button className="experience-resume-button">
                        Download Resume
                        <FontAwesomeIcon icon={faDownload} />
                    </button>
                </div>
            </div>
            <div className="career-history">
                <Education />
                <Work />
                <Technologies />
            </div>
        </div>
    );
}

export default Experiences;
