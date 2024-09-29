import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Animation
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Work from "./Work";
import Education from "./Education";
import Technologies from "./Technologies";

const Experiences = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        config: { duration: 500 },
    });

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className="experience-content" id="experience">
            <animated.div ref={ref} style={animationProps} className="experience-content" >
                <h1 className="experience-title">Experiences & Education</h1>
                <div className="career-card-item" data-aos="flip-up">
                    <div className="avatar-container">
                        <svg className="bd-placeholder-img rounded-circle" width="120" height="120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Avatar" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Avatar</title>
                            <image href="/assets/png/avatar2.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="circle(50%)" />
                        </svg>
                    </div>
                    <div className="experience-details">
                        <h5>Full Stack Developer</h5>
                        <p>I specialize in Full Stack Development, encompassing front-end and back-end expertise. My focus is on creating robust web applications and native mobile apps that deliver seamless user experiences. I excel in UI/UX design, ensuring intuitive interfaces that blend functionality with elegance.</p>
                    </div>
                    <div className="experience-actions">
                        <a href="#contact" style={{ textDecoration: 'none' }}>
                            <button className="experience-request-button">
                                Request Quotation
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </a>
                        <Link to={"https://drive.google.com/file/d/1a93ydnQ50_D8jOW3aIGhq_OuJdM8QNyO/view?usp=sharing"} style={{ textDecoration: 'none' }}
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className="experience-resume-button">
                                Download Resume
                                <FontAwesomeIcon icon={faDownload} />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="career-history">
                    <Education />
                    <Work />
                    <Technologies />
                </div>
            </animated.div>
        </div>
    );
}

export default Experiences;
