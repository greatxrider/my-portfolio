const Featured = () => {
    return (
        <div className="featured-content">
            <h1 className="featured-title">Featured Projects</h1>
            <div className="featured-description">
                <p>Take a look at some of the projects I’ve worked on, covering Mobile App Development, Full Stack Development, and UI/UX Design. These projects reflect my hands-on experience and dedication to solving real-world problems.</p>
            </div>
            <div className="featured-project-container">
                <div className="project">
                    <div className="devices-container">
                        <img src="" alt="Screen" className="mac-screen-image" />
                        <img src="/src/app/assets/png/macpro.png" alt="MacBook Pro" className="macbook-image" />
                        <div className="iphone-container">
                            <img src="/src/app/assets/png/iphone.png" alt="Iphone" className="iphone-image" />
                            <img src="" alt="iPhone Screen" className="iphone-screen-image" />
                        </div>
                    </div>
                    <div className="project-description">
                        <h5>WheelsTalk America</h5>
                        <p>Dynamic website that empowers customers to access and contribute reviews for car dealerships, enhancing the overall shopping experience.</p>
                    </div>
                </div>
                <div className="project">
                    <div className="devices-container">
                        <img src="" alt="Screen" className="imac-screen-image" />
                        <img src="/src/app/assets/png/iMacPro.png" alt="iMac Pro" className="imac-image" />
                        <div className="iphone-container">
                            <img src="/src/app/assets/png/iphone.png" alt="Iphone" className="iphone-image" />
                            <img src="" alt="iPhone Screen" className="iphone-screen-image" />
                        </div>
                    </div>
                    <div className="project-description">
                        <h5>WheelsTalk America</h5>
                        <p>Dynamic website that empowers customers to access and contribute reviews for car dealerships, enhancing the overall shopping experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
