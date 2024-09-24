import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Utils
import { api } from '../../utils/apiHelper';

// Components
import Loading from "../Loading/Loading";

// Define types for the work data and errors
interface BlogsItem {
    date: string;
    title: string;
    description: string;
    blogLink: string;
    imageUrl: string;
}

interface ApiError {
    message: string;
}

const Blog = () => {
    const navigate = useNavigate();

    // State
    const [blogs, setBlogs] = useState<BlogsItem[]>([]);
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

    const fetchBlogs = async (): Promise<void> => {
        try {
            const response = await api("/blogs");
            const data = await handleApiResponse(response);
            if (data) {
                setBlogs(data);
                console.log('Blogs are successfully fetched!');
            }
        } catch (error) {
            console.log(error);
            navigate("/error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    useEffect(() => {
        if (!loading) {
            $(document).ready(function () {
                $("#news-slider-blogs").owlCarousel({
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
        <div className="blog-content">
            <h1 className="blog-title">Personal Blog</h1>
            <div className="blog-description">
                <p>
                    Welcome to my personal blog, where I share insights, experiences,
                    and knowledge on a variety of topics related to my professional journey and personal interests.
                    Through my blog posts, I aim to provide valuable information,
                    practical tips, and thought-provoking discussions.
                </p>
            </div>
            {blogs && blogs.length > 0 ? (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="news-slider-blogs" className="owl-carousel">
                                {blogs.map((blog, index) => (
                                    <div className="post-slide" key={index}>
                                        <div className="post-img">
                                            <img src={blog.imageUrl} alt={blog.title} />
                                            <a href={blog.blogLink} className="over-layer"><i className="fa fa-link"></i></a>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="post-title">
                                                <a href={blog.blogLink}>{blog.title}</a>
                                            </h3>
                                            <p className="post-description">
                                                {blog.description.length > 180 ? `${blog.description.substring(0, 180)}...` : blog.description}
                                            </p>
                                            <span className="post-date"><i className="fa fa-clock-o"></i>{blog.date}</span>
                                            <a href={blog.blogLink} className="read-more">read more</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                loading ? <Loading /> : <p>No blogs available.</p>
            )}
        </div>
    );
}

export default Blog;
