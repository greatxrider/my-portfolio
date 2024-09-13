import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Social Icons
import Vector1 from "../Logos/Vector1";
import Facebook from "../Logos/Facebook";
import Reddit from "../Logos/Reddit";
import Github from "../Logos/Github";
import Linkedin from "../Logos/Linkedin";
import ImageColumn from "../Logos/ImageColumn.tsx";

const Headline = () => {
    return (
        <div className="headline-section">
            <div className="headline-container">
                <div className="profile-info">
                    <div className="intro">
                        <p>Hi, I am <span className="highlight">Jeph!</span></p>
                    </div>
                    <div className="job-title">
                        <h1>Full Stack Developer</h1>
                    </div>
                    <div className="vector-svg">
                        <Vector1 />
                    </div>
                    <div className="pitch">
                        <p>Empowering Business Growth and Excellence Through Innovative Full Stack Web Development</p>
                    </div>
                    <div className="social">
                        <p>Follow Me</p>
                        <div className="social-icons">
                            <Reddit />
                            <Facebook />
                            <Github />
                            <Linkedin />
                        </div>
                    </div>
                    <div className="cta-buttons">
                        <button type="button" className="hello-button">Say Hello</button>
                        <button type="button" className="view-button">View Portfolio <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                    </div>
                </div>
                <div className="image-column">
                    <ImageColumn className="imageColumn" />
                </div>
            </div>
        </div>
    );
};

export default Headline;
