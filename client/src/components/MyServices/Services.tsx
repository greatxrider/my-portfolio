const Services = () => {
    return (
        <div className="services-content">
            <h1 className="services-title">Services</h1>
            <div className="services-description">
                <p>I’m here to help you find effective solutions and overcome challenges. Using a structured design approach, I ensure that every product is thoughtfully crafted, thoroughly tested, and continuously refined. This method not only guarantees quality but also enables the creation of solutions that truly align with your business goals and drive sustainable growth.</p>
            </div>
            <div className="services-main">
                <div className="services-image">
                    <img src="/src/app/assets/png/design-process.png" alt="Design Process" />
                </div>
                <div className="services-list">
                    <div className="service-item">
                        <div className="service-image">
                            <img src="/src/app/assets/png/fullStackFrame.png" alt="Full Stack Frame" />
                        </div>
                        <div className="service-title">
                            <h5>Full Stack Development</h5>
                        </div>
                        <div className="service-description">
                            <p>Comprehensive web solutions from front-end to back-end development</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-image">
                            <img src="/src/app/assets/png/uiUxFrame.png" alt="UI/UX Frame" />
                        </div>
                        <div className="service-title">
                            <h5>UI/UX Design</h5>
                        </div>
                        <div className="service-description">
                            <p>Creating intuitive and engaging user interfaces and experiences</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-image">
                            <img src="/src/app/assets/png/mobileAppDevFrame.png" alt="Mobile Dev Frame" />
                        </div>
                        <div className="service-title">
                            <h5>Mobile App Development</h5>
                        </div>
                        <div className="service-description">
                            <p>Innovative mobile apps for iOS and Android platforms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
