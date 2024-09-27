import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Utils
import { api } from '../../utils/apiHelper';
import { formatDate } from '../../utils/dateFormatter';

// Components
import Loading from "../Loading/Loading";

// Define types for the education data and errors
interface EducationItem {
    school: string;
    degree: string;
    courseWork: string;
    city: string;
    province: string;
    start: Date;
    end?: Date | null; // Optional field that can be null
}

interface ApiError {
    message: string;
}

const Education = () => {
    const navigate = useNavigate();

    // State
    const [education, setEducation] = useState<EducationItem[]>([]);
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

    const fetchEducation = async (): Promise<void> => {
        try {
            const response = await api("/education");
            const data = await handleApiResponse(response);
            if (data) {
                setEducation(data);
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
        fetchEducation();
    }, []);

    if (loading) {
        return <Loading />; // Render the Loading component while loading
    }

    return (
        <>
            <div className="education-item" data-aos="flip-right">
                <h6 className="education-title">— EDUCATION</h6>
                {education.map((edu, index) => (
                    <div className="education-info-container" key={index}>
                        <div className="education-date-institution">
                            <p className="education-institution">{edu.school}</p>
                            <p className="education-date">
                                {formatDate(edu.start)} - {edu.end ? formatDate(edu.end) : 'Present'}
                            </p>
                        </div>
                        <h5 className="education-program">{edu.degree}</h5>
                        <p className="education-coursework">
                            <span style={{ fontWeight: 'bold' }}>Coursework: </span>
                            {edu.courseWork}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Education;
