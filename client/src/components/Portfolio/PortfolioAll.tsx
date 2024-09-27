// Animation
import { useSpring, animated } from '@react-spring/web'

const PortfolioAll = ({ categories }) => {
    const springs = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
        delay: 500,
    });

    return (
        <>
            {categories.map((category) => (
                category.projects.map((project, index) => (
                    <div className="gallery-item" key={project.id || index}>
                        <animated.div style={springs} className="gallery-item">
                            <img
                                className="project-image"
                                src={project.imageUrlDesktop}
                                alt={project.title || `Project ${index + 1}`} // Improve alt text
                                data-bs-toggle="modal"
                                data-bs-target={`#exampleModal-${project.id || index}`} // Use project ID if available
                                style={{ cursor: 'pointer' }}
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                            />
                            <div className="modal fade" id={`exampleModal-${project.id || index}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${project.id || index}`} aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content bg-dark">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id={`exampleModalLabel-${project.id || index}`}>{project.title}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <img
                                                src={project.imageUrlDesktop}
                                                className="modal-image"
                                                alt={project.title || `Project ${index + 1}`} // Improve alt text
                                            />
                                            <p>{project.description}</p>
                                            <div className="technologies-container">
                                                <h5>Technologies Used</h5>
                                                <ul className="technology-list">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <li key={techIndex}>
                                                            <img className="technology-logo" src={tech.imgShieldsLogo} alt={tech.technology} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <a className="modal-live-link" target="_blank" rel="noopener noreferrer" href={project.liveLink}>Live Link</a>
                                            <a className="modal-github-link" target="_blank" rel="noopener noreferrer" href={project.githubLink}>GitHub Link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </animated.div>
                    </div>
                ))
            ))}
        </>
    );
}

export default PortfolioAll;
