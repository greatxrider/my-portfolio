import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Animation
import { useSpring, animated } from '@react-spring/web'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Social Icons
import Vector1 from "../Logos/Vector1";
import Instagram from "../Logos/Instagram";
import X from '../Logos/X';
import Github from "../Logos/Github";
import Linkedin from "../Logos/Linkedin";
import LeetCode from '../Logos/LeetCode';
import ImageColumn from "../Logos/ImageColumn.tsx";

import { Link } from "react-router-dom";
import { useEffect } from 'react';

import './Headline.css';

const Headline = () => {
    const springs = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 100 },
        delay: 100,
    });

    useEffect(() => {
        const dynamicText = document.querySelector("h1 span");
        const words = ["Developer", "Engineer"];

        // Variables to track the position and deletion status of the word
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeEffect = () => {
            const currentWord = words[wordIndex];
            const currentChar = currentWord.substring(0, charIndex);
            dynamicText.textContent = currentChar;
            dynamicText.classList.add("stop-blinking");

            if (!isDeleting && charIndex < currentWord.length) {
                // If condition is true, type the next character
                charIndex++;
                setTimeout(typeEffect, 200);
            } else if (isDeleting && charIndex > 0) {
                // If condition is true, remove the previous character
                charIndex--;
                setTimeout(typeEffect, 100);
            } else {
                // If word is deleted then switch to the next word
                isDeleting = !isDeleting;
                dynamicText.classList.remove("stop-blinking");
                wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
                setTimeout(typeEffect, 1200);
            }
        }

        typeEffect();
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className="headline-section">
            <div className="headline-container">
                <animated.div style={springs} data-aos="fade-right">
                    <div className="profile-info">
                        <div className="intro">
                            <p>Hi, I am <span className="highlight">Jeph!</span></p>
                        </div>
                        <div className="job-title">
                            <h1>Full Stack <span></span></h1>
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
                </animated.div>
                <animated.div style={springs} data-aos="fade-left">
                    <div className="image-column">
                        <ImageColumn className="imageColumn" />
                    </div>
                </animated.div>
            </div>
        </div>
    );
};

export default Headline;
