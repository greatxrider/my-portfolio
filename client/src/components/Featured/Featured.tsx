import Imac from './Devices/Imac';
import MacPro from './Devices/MacPro';

const Featured = ({ categories }) => {
    return (
        <div className="featured-content">
            <h1 className="featured-title">Featured Projects</h1>
            <div className="featured-description">
                <p>Take a look at some of the projects I’ve worked on, covering Mobile App Development, Full Stack Development,
                    and UI/UX Design. These projects reflect my hands-on experience and dedication to solving real-world
                    problems.</p>
            </div>
            <div className="featured-project-container">
                {categories && categories.length > 0 ? (
                    categories.map((category) => {
                        console.log(category);
                        return category.projects.map((project, index) => {
                            if (project.isFeatured) {
                                console.log(project);
                                if (project.deviceType === 'imac') {
                                    return (
                                        <Imac key={project.id} project={project} />
                                    );
                                } else if (project.deviceType === 'macpro') {
                                    return (
                                        <MacPro key={project.id} project={project} />
                                    );
                                }
                            }
                        });
                    })
                ) : (
                    <p>No featured projects available.</p>
                )}
                {/* <div className="project">
                    <div className="devices-container">
                        <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" alt="Screen"
                            className="mac-screen-image" />
                        <img src="/src/app/assets/png/macpro.png" alt="MacBook Pro" className="macbook-image" />
                        <div className="iphone-container">
                            <img src="/src/app/assets/png/iphone.png" alt="Iphone" className="iphone-image" />
                            <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
                                alt="iPhone Screen" className="iphone-screen-image" />
                        </div>
                    </div>
                    <div className="project-description">
                        <h5>WheelsTalk America</h5>
                        <p>Dynamic website that empowers customers to access and contribute reviews for car dealerships,
                            enhancing the overall shopping experience.</p>
                    </div>
                </div>
                <div className="project">
                    <div className="devices-container">
                        <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" alt="Screen"
                            className="imac-screen-image" />
                        <img src="/src/app/assets/png/iMacPro.png" alt="iMac Pro" className="imac-image" />
                        <div className="iphone-container">
                            <img src="/src/app/assets/png/iphone.png" alt="Iphone" className="iphone-image" />
                            <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
                                alt="iPhone Screen" className="iphone-screen-image" />
                        </div>
                    </div>
                    <div className="project-description">
                        <h5>WheelsTalk America</h5>
                        <p>Dynamic website that empowers customers to access and contribute reviews for car dealerships,
                            enhancing the overall shopping experience.</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Featured;