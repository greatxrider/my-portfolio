import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Utils
import { api } from '../../utils/apiHelper';

// Components
import Loading from "../Loading/Loading";
import BasicRating from '../Rating';

// Define types for the work data and errors
interface TestimonialsItem {
    firstName: string;
    lastName: string;
    comment: string;
    rating: string;
    profileImageUrl: string;
    jobTitle: string;
}

interface ApiError {
    message: string;
}

const Testimonials = () => {
    const navigate = useNavigate();

    // State
    const [testimonials, setTestimonials] = useState<TestimonialsItem[]>([]);
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

    const fetchTestimonials = async (): Promise<void> => {
        try {
            const response = await api("/testimonials");
            const data = await handleApiResponse(response);
            if (data) {
                setTestimonials(data);
                console.log('Testimonials are successfully fetched!');
            }
        } catch (error) {
            console.log(error);
            navigate("/error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    useEffect(() => {
        if (!loading) {
            $(document).ready(function () {
                $("#news-slider-testimonial").owlCarousel({
                    items: 3,
                    itemsDesktop: [1199, 3],
                    itemsDesktopSmall: [980, 2],
                    itemsMobile: [600, 1],
                    navigation: true,
                    navigationText: ["", ""],
                    pagination: true,
                    autoPlay: false
                });
            });
        }
    }, [loading]);


    if (loading) {
        return <Loading />; // Render the Loading component while loading
    }

    return (
        <div className="testimonials-content">
            <h1 className="testimonials-title">Testimonials</h1>
            <div className="testimonials-description">
                <p>What other people say about me</p>
            </div>
            {testimonials && testimonials.length > 0 ? (
                <div className="testimonials-carousel container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="news-slider-testimonial" className="owl-carousel">
                                {testimonials.map((testimonial, index) => (
                                    <div className="post-slide" key={index}>
                                        <div className="post-img">
                                            <img src={testimonial.profileImageUrl} alt="profile" />
                                        </div>
                                        <BasicRating rating={testimonial.rating} />
                                        <div className="post-content">
                                            <p className="post-description">
                                                {testimonial.comment.length > 200 ? `${testimonial.comment.substring(0, 200)}...` : testimonial.comment}
                                            </p>
                                        </div>
                                        <div className="testimonial-name">
                                            <h5>{testimonial.firstName} {testimonial.lastName}</h5>
                                        </div>
                                        <div className="testimonial-job-title">
                                            <p>{testimonial.jobTitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No testimonials available.</p>
            )}
        </div>
    );
}

export default Testimonials;