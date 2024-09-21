import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Utils
import { api } from '../../utils/apiHelper';
import { formatDate } from '../../utils/dateFormatter';

// Components
import Loading from "../Loading/Loading";

// Define types for the work data and errors
interface WorkItem {
    company: string;
    jobTitle: string;
    description: string;
    city: string;
    province: string;
    country: string;
    start: Date;
    end?: Date | null; // Optional field that can be null
}

interface ApiError {
    message: string;
}

const Work = () => {
    const navigate = useNavigate();

    // State
    const [work, setWork] = useState<WorkItem[]>([]);
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

    const fetchWork = async (): Promise<void> => {
        try {
            const response = await api("/work");
            const data = await handleApiResponse(response);
            if (data) {
                setWork(data);
                console.log('Works are successfully fetched!');
            }
        } catch (error) {
            console.log(error);
            navigate("/error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWork();
    }, []);

    if (loading) {
        return <Loading />; // Render the Loading component while loading
    }

    return (
        <div className="work-history">
            <h6 className="work-history-title">— WORK HISTORY</h6>
            {work.map((job, index) => (
                <div className="work-info-container" key={index}>
                    <div className="work-date-company">
                        <p className="work-company">{job.company}</p>
                        <p className="work-date">
                            {formatDate(job.start)} - {job.end ? formatDate(job.end) : 'Present'}
                        </p>
                    </div>
                    <h5 className="work-position">{job.jobTitle}</h5>
                    <p className="work-description">{job.description}</p>
                </div>
            ))};
        </div>
    );
}

export default Work;
