import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";

import Html from "../Logos/Technologies/Html";
import Css from "../Logos/Technologies/Css";
import Javascript from "../Logos/Technologies/Javascript";
import Next from "../Logos/Technologies/Next";
import Nodejs from "../Logos/Technologies/Nodejs";
import Python from "../Logos/Technologies/Python";

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
                <div className="education-item">
                    <h6 className="education-title">—— EDUCATION</h6>
                    <div className="education-info-container">
                        <div className="education-date-institution">
                            <p className="education-date">February 2024 - July 2024</p>
                            <p className="education-institution">• Nucamp</p>
                        </div>
                        <h5 className="education-program">Full Stack Web and Mobile Development Bootcamp</h5>
                        <p className="education-coursework">Coursework - Git, GitHub, Javascript, TypeScript, React, React Native, Angular, NodeJS, Express, Google Cloud, Firebase, NoSQL, MongoDB and VSCode</p>
                    </div>
                </div>
                <div className="work-history">
                    <h6 className="work-history-title">—— WORK HISTORY</h6>
                    <div className="work-info-container">
                        <div className="work-date-company">
                            <p className="work-date">February 2024 - July 2024</p>
                            <p className="work-company">• Nyxpro</p>
                        </div>
                        <h5 className="work-position">Full Stack Web Developer</h5>
                        <p className="work-description">As a Full Stack Developer and co-owner of the dynamic tech startup, I specialize in delivering comprehensive digital solutions to meet diverse business needs.</p>
                    </div>
                </div>
                <div className="technologies-tools">
                    <h6 className="technologies-title">—— TECHNOLOGIES AND TOOLS</h6>
                    <div className="technologies-info-container">
                        <div className="technologies-list">
                            <div className="technology-item">
                                <Html />
                                <h6>HTML</h6>
                            </div>
                            <div className="technology-item">
                                <Css />
                                <h6>CSS</h6>
                            </div>
                            <div className="technology-item">
                                <Javascript />
                                <h6>JavaScript</h6>
                            </div>
                            <div className="technology-item">
                                <Next />
                                <h6>NextJS</h6>
                            </div>
                            <div className="technology-item">
                                <Nodejs />
                                <h6>NodeJS</h6>
                            </div>
                            <div className="technology-item">
                                <Python />
                                <h6>Python</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
