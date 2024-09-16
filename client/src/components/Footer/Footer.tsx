import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram, faReddit } from '@fortawesome/free-brands-svg-icons';

import Logo from "../Logos/Logo";

const Footer = () => {
    return (
        <footer>
            <div className="footer-social-icons">
                <FontAwesomeIcon icon={faReddit} className="fa-icon" />
                <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
                <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
                <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
                <FontAwesomeIcon icon={faGithub} className="fa-icon" />
            </div>
            <div className="footer-logo">
                <Logo />
            </div>
            <div className="footer-copyright">
                <p>© 2023 Jeph Daligdig. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
