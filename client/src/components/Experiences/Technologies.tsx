import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Utils
import { api } from '../../utils/apiHelper';

// Components
import Loading from "../Loading/Loading";

// Define types for the education data and errors
interface TechnologyItem {
    technology: string;
    imgShieldsLogo: string;
    svgContent: string;
}

interface ApiError {
    message: string;
}

const Technologies = () => {
    const navigate = useNavigate();

    // State
    const [technology, setTechnology] = useState<TechnologyItem[]>([]);
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

    const fetchTechnologies = async (): Promise<void> => {
        try {
            const response = await api("/skills");
            const data = await handleApiResponse(response);
            if (data) {
                setTechnology(data);
                console.log('Education are successfully fetched!');
            }
        } catch (error) {
            console.log(error);
            navigate("/error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTechnologies();
    }, []);

    if (loading) {
        return <Loading />; // Render the Loading component while loading
    }

    return (
        <div className="technologies-tools" data-aos="flip-right">
            <h6 className="technologies-title">— TECHNOLOGIES AND TOOLS</h6>
            <div className="technologies-info-container">
                <div className="technologies-list">
                    {technology.map((tech, index) => (
                        <div className="technology-item" key={index}>
                            <div dangerouslySetInnerHTML={{ __html: tech.svgContent }} />
                            <h6>{tech.technology}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Technologies;