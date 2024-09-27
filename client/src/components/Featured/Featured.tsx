import Imac from './Devices/Imac';
import MacPro from './Devices/MacPro';

// Animation
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Featured = ({ categories }) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.01, // Trigger when 10% of the component is visible
    });

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        config: { duration: 1000 },
    });

    return (
        <div className="featured-content" id="projects" >
            <animated.div ref={ref} style={animationProps} className="featured-content" >
                <h1 className="featured-title">Featured Projects</h1>
                <div className="featured-description">
                    <p>Take a look at some of the projects I’ve worked on, covering Mobile App Development, Full Stack Development,
                        and UI/UX Design. These projects reflect my hands-on experience and dedication to solving real-world
                        problems.
                    </p>
                </div>
                <div className="featured-project-container">
                    {categories && categories.length > 0 ? (
                        categories.map((category) => {
                            return category.projects.map((project) => {
                                if (project.isFeatured) {
                                    if (project.deviceType === 'imac') {
                                        return (
                                            <Imac modalKey={project.id} project={project} key={project.id} />
                                        );
                                    } else if (project.deviceType === 'macpro') {
                                        return (
                                            <MacPro modalKey={project.id} project={project} key={project.id} />
                                        );
                                    }
                                }
                            });
                        })
                    ) : (
                        <p>No featured projects available.</p>
                    )}
                </div>
            </animated.div>
        </div>
    );
}

export default Featured;