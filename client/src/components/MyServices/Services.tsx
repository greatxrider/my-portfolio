import { useEffect } from "react";

// Animation
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
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
        <div className="services-content">
            <animated.div ref={ref} style={animationProps} className="services-content">
                <h1 className="services-title">Services</h1>
                <div className="services-description" data-aos="zoom-in">
                    <p>I’m here to help you find effective solutions and overcome challenges. Using a structured design approach, I ensure that every product is thoughtfully crafted, thoroughly tested, and continuously refined. This method not only guarantees quality but also enables the creation of solutions that truly align with your business goals and drive sustainable growth.</p>
                </div>
                <div className="services-main">
                    <div className="services-image" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src="/assets/png/design-process.png" alt="Design Process" />
                    </div>
                    <div className="services-list">
                        <div className="service-item" data-aos="flip-left">
                            <div className="service-image">
                                <img src="/assets/png/fullStackFrame.png" alt="Full Stack Frame" />
                            </div>
                            <div className="service-title">
                                <h5>Full Stack Development</h5>
                            </div>
                            <div className="service-description">
                                <p>Comprehensive web solutions from front-end to back-end development</p>
                            </div>
                        </div>
                        <div className="service-item" data-aos="flip-up">
                            <div className="service-image">
                                <img src="/assets/png/uiUxFrame.png" alt="UI/UX Frame" />
                            </div>
                            <div className="service-title">
                                <h5>UI/UX Design</h5>
                            </div>
                            <div className="service-description">
                                <p>Creating intuitive and engaging user interfaces and experiences</p>
                            </div>
                        </div>
                        <div className="service-item" data-aos="flip-right">
                            <div className="service-image">
                                <img src="/assets/png/mobileAppDevFrame.png" alt="Mobile Dev Frame" />
                            </div>
                            <div className="service-title">
                                <h5>Mobile App Development</h5>
                            </div>
                            <div className="service-description">
                                <p>Innovative mobile apps for iOS and Android platforms</p>
                            </div>
                        </div>
                    </div>
                </div>
            </animated.div>
        </div>
    );
}

export default Services;
