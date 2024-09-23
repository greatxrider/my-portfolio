const PortfolioContainer = ({ categories }) => {
    const projects = categories.projects;
    return (
        projects.map((project, i) => {
            return (
                <div className="gallery-item" key={i}>
                    <img
                        className="project-image"
                        src={project.imageUrlDesktop}
                        alt={`Placeholder ${i + 1}`}
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal-${i}`}
                        style={{ cursor: 'pointer' }}
                    />
                    <div className="modal fade" id={`exampleModal-${i}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${i}`} aria-hidden="true">
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
                                        alt={`Placeholder ${i + 1}`}
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
        })
    );
}

export default PortfolioContainer;