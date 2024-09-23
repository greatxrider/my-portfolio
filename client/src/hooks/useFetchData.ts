import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/apiHelper';

interface ApiError {
    message: string;
  }

const useFetchData = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState < boolean > (true);
    const [errors, setErrors] = useState < ApiError[] > ([]);

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
                console.log(`${endpoint} data successfully fetched!`);
            }
        } catch (error) {
            console.log(error);
            // navigate("/error");
        } finally {
            setLoading(false);
        }
    };

    return { fetchData, loading, setLoading, errors };
};

export default useFetchData;
