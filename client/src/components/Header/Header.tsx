import Logo from "../Logos/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header>
            <nav className="navbar custom-navbar navbar-expand-lg bg-body-tertiary navbar--height">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><Logo /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon className="navToggler" icon={faBars} style={{ color: "#ffffff", fontSize: 25 }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Expertise</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Crafts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
