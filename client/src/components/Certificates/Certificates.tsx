import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageModal from "./ImageModal";

// Utils
import { api } from '../../utils/apiHelper';
import { formatDate } from '../../utils/dateFormatter';

// Components
import Loading from "../Loading/Loading";

// Define types for the education data and errors
interface Certificate {
    certificateId: string;
    certificateImageUrl: string;
    certificateUrl: string;
    title: string;
    issueDate: string;
}

interface InstitutionItem {
    name: string;
    url: string;
    certificates: Certificate[];
}

interface ApiError {
    message: string;
}

const Certificates = () => {
    const navigate = useNavigate();

    // State
    const [institutions, setInstitutions] = useState<InstitutionItem[]>([]);
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

    const fetchInstitutions = async (): Promise<void> => {
        try {
            const response = await api("/institutions");
            const data = await handleApiResponse(response);
            if (data) {
                setInstitutions(data);
                console.log('Institutions are successfully fetched!');
            }
        } catch (error) {
            console.log(error);
            navigate("/error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInstitutions();
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
                            <div className="certifications-content" key={index}>
                                <h1 className="certifications-title">{institution.name}</h1>
                                <div className={`row ${institution.certificates.length === 1 ? 'single-card-row' : 'row-cols-1 row-cols-md-3 g-4 justify-content-center'}`}>
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
        </>
    );
}

export default Certificates;
