import { useEffect } from "react";

const Testimonials = () => {
    useEffect(() => {
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
    }, []);

    return (
        <div className="testimonials-content">
            <h1 className="testimonials-title">Testimonials</h1>
            <div className="testimonials-description">
                <p>What other people say about me</p>
            </div>
            <div className="testimonials-carousel container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div id="news-slider-testimonial" className="owl-carousel">
                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="/src/app/assets/png/avatar2.png" alt="" />
                                </div>
                                <div className="post-content">
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                </div>
                                <div className="testimonial-name">
                                    <h5>JENNY WILSON</h5>
                                </div>
                                <div className="testimonial-job-title">
                                    <p>Medical Assitant</p>
                                </div>
                            </div>

                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="/src/app/assets/png/avatar2.png" alt="" />
                                </div>
                                <div className="post-content">
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                </div>
                                <div className="testimonial-name">
                                    <h5>JENNY WILSON</h5>
                                </div>
                                <div className="testimonial-job-title">
                                    <p>Medical Assitant</p>
                                </div>
                            </div>

                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="/src/app/assets/png/avatar2.png" alt="" />
                                </div>
                                <div className="post-content">
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                </div>
                                <div className="testimonial-name">
                                    <h5>JENNY WILSON</h5>
                                </div>
                                <div className="testimonial-job-title">
                                    <p>Medical Assitant</p>
                                </div>
                            </div>

                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="/src/app/assets/png/avatar2.png" alt="" />
                                </div>
                                <div className="post-content">
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                </div>
                                <div className="testimonial-name">
                                    <h5>JENNY WILSON</h5>
                                </div>
                                <div className="testimonial-job-title">
                                    <p>Medical Assitant</p>
                                </div>
                            </div>

                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="/src/app/assets/png/avatar2.png" alt="" />
                                </div>
                                <div className="post-content">
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                </div>
                                <div className="testimonial-name">
                                    <h5>JENNY WILSON</h5>
                                </div>
                                <div className="testimonial-job-title">
                                    <p>Medical Assitant</p>
                                </div>
                            </div>

                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="/src/app/assets/png/avatar2.png" alt="" />
                                </div>
                                <div className="post-content">
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                </div>
                                <div className="testimonial-name">
                                    <h5>JENNY WILSON</h5>
                                </div>
                                <div className="testimonial-job-title">
                                    <p>Medical Assitant</p>
                                </div>
                            </div>

                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="/src/app/assets/png/avatar2.png" alt="" />
                                </div>
                                <div className="post-content">
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                </div>
                                <div className="testimonial-name">
                                    <h5>JENNY WILSON</h5>
                                </div>
                                <div className="testimonial-job-title">
                                    <p>Medical Assitant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;