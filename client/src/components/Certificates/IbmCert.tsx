import ImageModal from "./ImageModal";

const IbmCert = () => {
    return (
        <div className="certifications-content">
            <h1 className="certifications-title">IBM</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                <div className="col devOps-specialization">
                    <div className="card h-100">
                        <ImageModal imageSrc="/src/app/assets/png/certificates/devOps-specialization.png" imageAlt="DevOps Specialization" />
                        <div className="card-body">
                            <h5 className="card-title">IBM DevOps, Cloud, and Agile Foundations Specialization</h5>
                            <p className="card-text">ID:</p>
                            <p className="card-text">URL:</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">September 16, 2024</small>
                        </div>
                    </div>
                </div>
                <div className="col applied-swe">
                    <div className="card h-100">
                        <img src="/src/app/assets/png/certificates/applied-swe.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">ID:</p>
                            <p className="card-text">URL:</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">September 16, 2024</small>
                        </div>
                    </div>
                </div>
                <div className="col devOps">
                    <div className="card h-100">
                        <img src="/src/app/assets/png/certificates/devops.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">ID:</p>
                            <p className="card-text">URL:</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">September 16, 2024</small>
                        </div>
                    </div>
                </div>
                <div className="col fullStackIBM">
                    <div className="card h-100">
                        <img src="/src/app/assets/png/certificates/fullstack.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">ID:</p>
                            <p className="card-text">URL:</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">September 16, 2024</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IbmCert;
