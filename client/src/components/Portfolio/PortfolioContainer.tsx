const PortfolioContainer = ({ categories }) => {
    const projects = categories.projects;

    return (
        projects.map((project, i) => (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" key={i}>
                <div className="gallery-item">
                    <img src={project.imageUrlDesktop} alt={`Placeholder ${i + 1}`} />
                </div>
            </a>
        ))
    );
}

export default PortfolioContainer;