import { useNavigate } from "react-router-dom"

const Certifications = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/certificates");
    }

    return (
        <div className="certifications-content" id="certifications">
            <h1 className="certifications-title">Badges & Certifications</h1>
            <div className="certifications-body">
                <div className="certifications-description">
                    <p>
                        The certifications and badges I’ve earned aren’t the core of my
                        skills—they’re simply proof that I’ve undergone proper training and
                        am fully authorized to work as a developer. I use them to validate
                        my experience and ensure you can trust my ability to meet your
                        needs.
                    </p>
                </div>
                <div className="certifications-image">
                    <img src="/src/app/assets/png/beaming-face.png" alt="Beaming Face" />
                </div>
                <div className="certifications-action">
                    <button type="button" className="certifications-request-button" onClick={handleClick}>Certificates</button>
                </div>
            </div>
        </div>
    )
}

export default Certifications