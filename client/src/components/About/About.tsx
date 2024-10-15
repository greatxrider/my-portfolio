import { Link } from "react-router-dom";
import { useEffect } from "react";

import FullStack from "../Logos/FullStack"
import UiUx from "../Logos/UiUx"
import MobileDev from "../Logos/MobileDev"

// Animation
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        config: { duration: 1000 },
    });

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className="about-container" id="about">
            <animated.div ref={ref} style={animationProps}>
                <h1 className="about-title">About Me</h1>
                <div className="about-content">
                    <div className="experience-section" data-aos="fade-right">
                        <div className="overlay-text">
                            <h1 className="work-exp">1+</h1>
                        </div>
                        <h2>Years working experience</h2>
                    </div>
                    <div className="content-container">
                        <div className="description-section">
                            <p>
                                I'm Jeph, a Developer based in the Philippines. My journey began as a Mechanical Technician, followed by studying Electronics Engineering, but I started coding as soon as I finished my studies.
                                It may seem like an unusual path, but those experiences helped me discover where my true strengths and passions lie — in being a Developer.
                                I’ve always had a love for programming, but what truly inspired me was the humble and supportive attitude of the Developers I encountered. Their mindset, rooted in the world of programming, motivated me to embrace this career myself, and I aspire to work alongside like-minded individuals.

                                I taught myself to code, pursued online education, freelancing and focused on Full Stack Development, which has equipped me with the skills to contribute effectively in this field.
                            </p>
                            <h5>daligdig.jephmari@gmail.com</h5>
                            <div className="description-action">
                                <Link to="/aboutme" className="description-request-button">More About Me</Link>
                            </div>
                        </div>
                        <div className="services-section">
                            <div className="full-stack" data-aos="flip-left">
                                <FullStack />
                                <h5>Full Stack Development</h5>
                                <p>
                                    Comprehensive web solutions from front-end to back-end
                                    development
                                </p>
                            </div>
                            <div className="ui-ux" data-aos="flip-left">
                                <UiUx />
                                <h5>UI/UX Design</h5>
                                <p>
                                    Creating intuitive and engaging user interfaces and experiences
                                </p>
                            </div>
                            <div className="mobile-app-dev" data-aos="flip-left">
                                <MobileDev /> 
                                <h5>Mobile App Development</h5>
                                <p>Innovative mobile apps for iOS and Android platforms</p>
                            </div>
                        </div>
                    </div>
                </div>
            </animated.div>
        </div>
    );
};

export default About;
