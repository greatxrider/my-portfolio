const MacPro = ({ project, modalKey }) => {
    return (
        <div className="project">
            <div className="devices-container" data-aos="zoom-in">
                <img src={project.imageUrlDesktop} alt="Screen" className="macpro-screen-image" />
                <img
                    src="/src/app/assets/png/macpro.png"
                    alt="MacBook Pro"
                    className="macpro-image"
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal-${modalKey}`}
                    style={{ cursor: 'pointer' }}
                />
                <div className="iphone-container">
                    <img
                        src="/src/app/assets/png/iphone.png"
                        alt="Iphone"
                        className="iphone-image"
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal-${modalKey}`}
                        style={{ cursor: 'pointer' }}
                    />
                    <img src={project.imageUrlMobile} alt="iPhone Screen" className="iphone-screen-image" />
                </div>
            </div>
            <div className="project-description" data-aos="zoom-in">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
            </div>
            <div className="modal fade" id={`exampleModal-${modalKey}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${modalKey}`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{project.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img
                                src={project.imageUrlDesktop}
                                className="modal-image"
                                alt={`Placeholder ${modalKey + 1}`}
                            />
                            <p>{project.description}</p>
                            <div className="technologies-container">
                                <h5>Technologies Used</h5>
                                <ul className="technology-list">
                                    {project.technologies.map((tech, i) => (
                                        <li key={i}><img className="technology-logo" src={tech.imgShieldsLogo} /></li>
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
        </div>
    );
}

export default MacPro;