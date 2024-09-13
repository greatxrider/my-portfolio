import FullStack from "../Logos/FullStack";
import UiUx from "../Logos/UiUx";
import MobileDev from "../Logos/MobileDev";

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-content">
                <div className="experience-section">
                    <img src="/src/app/assets/png/clipPath.png" alt="Clip Path" />
                    <h1>1+</h1>
                    <p>Years working experience</p>
                </div>
                <div className="content-container">
                    <div className="description-section">
                        <p>I am Jeph Daligdig, a Full Stack Developer dedicated to helping businesses grow and excel in the digital market through comprehensive web and mobile app development. I specialize in building websites, software, and mobile applications, offering expertise in web design, front-end, back-end, and mobile app development. With a diverse skill set and extensive knowledge of software tools, I am well-equipped to meet your needs.</p>
                        <h5>daligdig.jephmari@gmail.com</h5>
                    </div>
                    <div className="services-section">
                        <div className="full-stack">
                            <h5>Full Stack Development</h5>
                            <FullStack />
                            <p>Comprehensive web solutions from front-end to back-end development</p>
                        </div>
                        <div className="ui-ux">
                            <h5>UI/UX Design</h5>
                            <UiUx />
                            <p>Creating intuitive and engaging user interfaces and experiences</p>
                        </div>
                        <div className="mobile-app-dev">
                            <h5>Mobile App Development</h5>
                            <MobileDev />
                            <p>Innovative mobile apps for iOS and Android platforms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
