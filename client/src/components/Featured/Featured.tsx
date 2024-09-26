import Imac from './Devices/Imac';
import MacPro from './Devices/MacPro';

const Featured = ({ categories }) => {
    return (
        <div className="featured-content" id="projects">
            <h1 className="featured-title">Featured Projects</h1>
            <div className="featured-description">
                <p>Take a look at some of the projects I’ve worked on, covering Mobile App Development, Full Stack Development,
                    and UI/UX Design. These projects reflect my hands-on experience and dedication to solving real-world
                    problems.</p>
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
        </div>
    );
}

export default Featured;