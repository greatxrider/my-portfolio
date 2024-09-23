const Imac = ({ project }) => {
    return (
        <div className="project">
            <div className="devices-container">
                <img src={project.imageUrlDesktop} alt="Screen" className="imac-screen-image" />
                <img src="/src/app/assets/png/iMacPro.png" alt="MacBook Pro" className="imac-image" />
                <div className="iphone-container">
                    <img src="/src/app/assets/png/iphone.png" alt="Iphone" className="iphone-image" />
                    <img src={project.imageUrlMobile} alt="iPhone Screen" className="iphone-screen-image" />
                </div>
            </div>
            <div className="project-description">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
            </div>
        </div>
    );
}

export default Imac;