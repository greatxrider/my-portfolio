const YsuCert = () => {
    return (
        <div className="certifications-content">
            <h1 className="certifications-title">YSU</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                <div className="col fullStackJavascript">
                    <div className="card h-100">
                        <img src="/src/app/assets/png/certificates/ysu.png" className="card-img-top" alt="..." />
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

export default YsuCert;