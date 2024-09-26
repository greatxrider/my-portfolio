import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Social Icons
import Vector1 from "../Logos/Vector1";
import Instagram from "../Logos/Instagram";
import X from '../Logos/X';
import Github from "../Logos/Github";
import Linkedin from "../Logos/Linkedin";
import LeetCode from '../Logos/LeetCode';
import ImageColumn from "../Logos/ImageColumn.tsx";

import { Link } from "react-router-dom";

const Headline = () => {
    return (
        <div className="headline-section">
            <div className="headline-container">
                <div className="profile-info">
                    <div className="intro">
                        <p>Hi, I am <span className="highlight">Jeph!</span></p>
                    </div>
                    <div className="job-title">
                        <h1>Full Stack Developer</h1>
                    </div>
                    <div className="vector-svg">
                        <Vector1 />
                    </div>
                    <div className="pitch">
                        <p>Empowering Business Growth and Excellence Through Innovative Full Stack Web Development</p>
                    </div>
                    <div className="social">
                        <p>Follow Me</p>
                        <div className="social-icons">
                            <X className="social-icon" />
                            <Instagram className="social-icon" />
                            <Github className="social-icon" />
                            <LeetCode className="social-icon" />
                            <Linkedin className="social-icon" />
                        </div>
                    </div>
                    <div className="cta-buttons">
                        <Link
                            className="hello-button"
                            to={'#contact'}
                            target="_blank"
                            rel="noopener noreferrer">Download Resume</Link>
                        <Link
                            className="view-button"
                            to={'https://my-portfolio-site-in-node-express.vercel.app/'}
                            target="_blank"
                            rel="noopener noreferrer">View Portfolio <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </Link>
                    </div>
                </div>
                <div className="image-column">
                    <ImageColumn className="imageColumn" />
                </div>
            </div>
        </div>
    );
};

export default Headline;
