const PortfolioContainer = ({ categories }) => {
    const projects = categories.projects;

    return (
        projects.map((project, i) => (
            <div className="gallery-item" key={i}>
                <img src={project.imageUrlDesktop} alt={`Placeholder ${i + 1}`} />
            </div>
        ))
    );
}

export default PortfolioContainer;