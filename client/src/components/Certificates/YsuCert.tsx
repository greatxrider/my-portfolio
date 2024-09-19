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
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YsuCert;