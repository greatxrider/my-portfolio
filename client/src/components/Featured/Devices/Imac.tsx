const Imac = ({ project, key }) => {
    return (
        <div className="project">
            <div className="devices-container">
                <img src={project.imageUrlDesktop} alt="Screen" className="imac-screen-image" />
                <img
                    src="/src/app/assets/png/iMacPro.png"
                    alt="MacBook Pro"
                    className="imac-image"
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal-${key}`}
                    style={{ cursor: 'pointer' }}
                />
                <div className="iphone-container">
                    <img
                        src="/src/app/assets/png/iphone.png"
                        alt="Iphone"
                        className="iphone-image"
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal-${key}`}
                        style={{ cursor: 'pointer' }}
                    />
                    <img src={project.imageUrlMobile} alt="iPhone Screen" className="iphone-screen-image" />
                </div>
            </div>
            <div className="project-description">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
            </div>
            <div className="modal fade" id={`exampleModal-${key}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${key}`} aria-hidden="true">
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
                                alt={`Placeholder ${key + 1}`}
                            />
                            <p>{project.description}</p>
                            <div className="technologies-container">
                                <h5>Technologies Used</h5>
                                <ul className="technology-list">
                                    {project.technologies.map((tech, i) => (
                                        <li key={i}><img className="technology-logo" src={tech.svgContent} /></li>
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

export default Imac;