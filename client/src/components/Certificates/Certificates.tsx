import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageModal from "./ImageModal";

// Utils
import { api } from '../../utils/apiHelper';
import { formatDate } from '../../utils/dateFormatter';

// Components
import Loading from "../Loading/Loading";
import { i } from "vitest/dist/reporters-yx5ZTtEV.js";

// Define types for the education data and errors
interface Certificate {
    certificateId: string;
    certificateImageUrl: string;
    certificateUrl: string;
    title: string;
    issueDate: string;
}

interface Badges {
    badgeSvgContent: string;
    badgeUrl: string;
}

interface InstitutionItem {
    name: string;
    url: string;
    badges: Certificate[];
}


interface IssuerItem {
    name: string;
    url: string;
    badges: Badges[];
}

interface ApiError {
    message: string;
}

const Certificates = () => {
    const navigate = useNavigate();

    // State
    const [institutions, setInstitutions] = useState<InstitutionItem[]>([]);
    const [issuers, setIssuers] = useState<IssuerItem[]>([]);
    const [errors, setErrors] = useState<ApiError[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    /**
     * Handles the API response and processes different status codes.
     * 
     * @param {Response} response - The response object from the fetch API.
     * @returns {Object|null} - The parsed JSON data or null.
     * @throws {Error} - Throws an error for unexpected status codes.
     */
    const handleApiResponse = async (response: Response): Promise<any | null> => {
        let data;

        if (response.status !== 204) {
            data = await response.json();
        }

        if (response.status === 200) {
            return data;
        } else if (response.status === 204) {
            return null;
        } else if (response.status === 304) {
            console.log('Resource not modified, using cached version.');
            return null;
        } else if (response.status === 400) {
            setErrors(data.errors);
            console.log(errors);
        } else if (response.status === 401) {
            navigate("/signin");
            throw new Error('Unauthorized');
        } else if (response.status === 403) {
            setErrors(data.errors);
            console.log(errors);
            navigate('/forbidden');
        } else {
            throw new Error('Unexpected error');
        }
    };

    const fetchData = async (endpoint: string, setData: (data: any) => void): Promise<void> => {
        try {
            const response = await api(endpoint);
            const data = await handleApiResponse(response);
            if (data) {
                setData(data);
                console.log(`${endpoint} successfully fetched!`);
            }
        } catch (error) {
            console.log(error);
            setErrors([{ message: error.message }]);
            navigate("/error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData("/institutions", setInstitutions);
        fetchData("/issuers", setIssuers);
    }, []);

    if (loading) {
        return <Loading />; // Render the Loading component while loading
    }

    return (
        <>
            <div className="certifications-content">
                <div className="certifications-container">
                    <h1 className="certifications-title">Certifications</h1>
                    <p className="certifications-description">I am certified to serve you.</p>
                    <div className="certifications">
                        {institutions.map((institution, index) => (
                            <div className="certifications-card" key={index}>
                                <h1 className="certifications-card-title">{institution.name}</h1>
                                <div className={`card-container row ${institution.certificates.length === 1 ? 'single-card-row' : 'row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center'}`}>
                                    {institution.certificates.map((certificate, certIndex) => (
                                        <div className="col" key={certIndex}>
                                            <div className="card h-100">
                                                <ImageModal imageSrc={certificate.certificateImageUrl} imageAlt={certificate.title} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{certificate.title}</h5>
                                                    <p className="card-text">
                                                        <span className="card-label-id">ID:</span> {certificate.certificateId}
                                                    </p>
                                                    <p className="card-text">
                                                        <span className="card-label-url">URL:</span> <a href={certificate.certificateUrl}>{certificate.certificateUrl}</a>
                                                    </p>
                                                </div>
                                                <div className="card-footer">
                                                    <small className="text-body-secondary">{formatDate(certificate.issueDate)}</small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="badges-content">
                <div className="badges-container">
                    <h1 className="badges-title">Badges</h1>
                    {issuers.map((issuer, index) => (
                        <div className="badge-issuer" key={index}>
                            <h4>{issuer.name}</h4>
                            {
                                issuer.badges.map((badge, index) => {
                                    return (
                                        <a className="link" href={badge.badgeUrl} key={index}>{badge.badgeUrl}</a>
                                    )
                                })
                            }
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Certificates;
