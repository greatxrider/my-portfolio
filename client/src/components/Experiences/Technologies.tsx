import Html from "../Logos/Technologies/Html";
import Css from "../Logos/Technologies/Css";
import Javascript from "../Logos/Technologies/Javascript";
import Next from "../Logos/Technologies/Next";
import Nodejs from "../Logos/Technologies/Nodejs";
import Python from "../Logos/Technologies/Python";

const Technologies = () => {
    return (
        <div className="technologies-tools">
            <h6 className="technologies-title">— TECHNOLOGIES AND TOOLS</h6>
            <div className="technologies-info-container">
                <div className="technologies-list">
                    <div className="technology-item">
                        <Html />
                        <h6>HTML</h6>
                    </div>
                    <div className="technology-item">
                        <Css />
                        <h6>CSS</h6>
                    </div>
                    <div className="technology-item">
                        <Javascript />
                        <h6>JavaScript</h6>
                    </div>
                    <div className="technology-item">
                        <Next />
                        <h6>NextJS</h6>
                    </div>
                    <div className="technology-item">
                        <Nodejs />
                        <h6>NodeJS</h6>
                    </div>
                    <div className="technology-item">
                        <Python />
                        <h6>Python</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;