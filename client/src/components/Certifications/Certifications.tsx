import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

// Animation
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Certifications = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/certificates");
    }

    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        config: { duration: 500 },
    });

    return (
        <div className="certifications-content" id="certifications">
            <animated.div ref={ref} style={animationProps} className="experience-content" >
                <h1 className="certifications-title">Badges & Certifications</h1>
                <div className="certifications-body">
                    <div className="certifications-description">
                        <p>
                            The certifications and badges I’ve earned aren’t the core of my
                            skills—they’re simply proof that I’ve undergone proper training and
                            am fully authorized to work as a developer. I use them to validate
                            my experience and ensure you can trust my ability to meet your
                            needs.
                        </p>
                    </div>
                    <div className="certifications-image">
                        <img src="/src/app/assets/png/beaming-face.png" alt="Beaming Face" />
                    </div>
                    <div className="certifications-action">
                        <button type="button" className="certifications-request-button" onClick={handleClick}>Certificates</button>
                    </div>
                </div>
            </animated.div>
        </div>
    )
}

export default Certifications