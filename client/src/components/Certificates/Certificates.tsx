import IbmCert from "./IBMCert";
import NucampCert from "./NucampCert";
import TreeHouseCert from "./TreeHouseCert";
import YsuCert from "./YsuCert";

const Certificates = () => {
    return (
        <>
            <div className="certifications-content">
                <div className="certifications-container">
                    <h1 className="certifications-title">Certifications</h1>
                    <p>I am certified to serve you.</p>
                    <div className="certifications">
                        <IbmCert />
                        <NucampCert />
                        <TreeHouseCert />
                        <YsuCert />
                    </div>
                </div>
            </div>
            <div className="badges-content">
                <div className="certifications-container">
                    <h1 className="certifications-title">Badges I earned</h1>
                    <div className="certifications-title">
                        <h4>Credly Badges</h4>
                        <a className="credly-link" href="https://www.credly.com/users/jeph-mari-daligdig">https://www.credly.com/users/jeph-mari-daligdig</a>
                    </div>
                    <div className="certifications-title">
                        <h4>NuCamp Badges</h4>
                        <a className="nucamp-link" href="https://api.badgr.io/public/collections/354e858bcdc94416b362cef0ebd82d96">https://api.badgr.io/public/collections/354e858bcdc94416b362cef0ebd82d96</a>
                    </div>
                    <div className="certifications-title">
                        <h4>Treehouse Badges</h4>
                        <a className="treehouse-link" href="https://teamtreehouse.com/profiles/greatxrider">https://teamtreehouse.com/profiles/greatxrider</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Certificates;
