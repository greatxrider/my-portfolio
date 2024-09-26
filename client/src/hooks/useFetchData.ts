import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/apiHelper';

interface ApiError {
    message: string;
}

const useFetchData = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);
    const [errors, setErrors] = useState<ApiError[]>([]);

    const handleApiResponse = async (response: Response): Promise<any | null> => {
        let data;

        if (response.status !== 204) {
            data = await response.json();
        }

        if (response.ok) { // This checks if the response status is in the range 200-299
            return data;
        } else if (response.status === 204) {
            return null; // No content
        } else if (response.status === 304) {
            console.log('Resource not modified, using cached version.');
            return null; // Not modified
        } else {
            // Handle errors
            const errorData = data?.errors || [{ message: 'Unexpected error' }];
            setErrors(errorData);
            console.error(errorData);
            if (response.status === 401) {
                navigate("/signin");
                throw new Error('Unauthorized');
            } else if (response.status === 403) {
                navigate('/forbidden');
            } else {
                throw new Error('Unexpected error');
            }
        }
    };

    const fetchData = async (endpoint: string, setData: (data: any) => void): Promise<void> => {
        setLoading(true); // Move loading state update here for accurate loading state
        try {
            const response = await api(endpoint);
            const data = await handleApiResponse(response);
            if (data) {
                setData(data);
                console.log(`${endpoint} data successfully fetched!`);
            }
        } catch (error) {
            console.error(error);
            // Optionally navigate to an error page or handle it in another way
            // navigate("/error");
        } finally {
            setLoading(false);
        }
    };

    return { fetchData, loading, setLoading, errors };
};

export default useFetchData;
