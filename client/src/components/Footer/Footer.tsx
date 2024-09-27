import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faInstagram, faReddit } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import Logo from "../Logos/Logo";

const Footer = () => {
    return (
        <footer>
            <div className="footer-social-icons">
                <Link to="https://x.com/mrjephdev/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} className="fa-icon" /></Link>
                <Link to="https://www.instagram.com/imyouritguy/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="fa-icon" /></Link>
                <Link to="https://github.com/greatxrider/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="fa-icon" /></Link>
                <Link to="https://www.linkedin.com/in/jephmari/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fa-icon" /></Link>
                <Link to="https://www.reddit.com/user/Desm_jp/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faReddit} className="fa-icon" /></Link>
            </div>
            <div className="footer-logo">
                <Logo />
            </div>
            <div className="footer-copyright">
                <p>© 2024 Jeph Daligdig. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
