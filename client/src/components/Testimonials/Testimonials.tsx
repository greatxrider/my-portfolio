import { useEffect } from "react";

const Testimonials = () => {
    useEffect(() => {
        $(document).ready(function () {
            $("#news-slider").owlCarousel({
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [980, 2],
                itemsMobile: [600, 1],
                navigation: true,
                navigationText: ["", ""],
                pagination: true,
                autoPlay: true
            });
        });
    }, []);

    return (
        <div className="testimonials-content">
            <h1 className="testimonials-title">Testimonials</h1>
            <div className="testimonials-description">
                <p>The trust from clients.</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div id="news-slider" className="owl-carousel">
                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="https://images.unsplash.com/photo-1596265371388-43edbaadab94?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501" alt="" />
                                    <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                                </div>
                                <div className="post-content">
                                    <h3 className="post-title">
                                        <a href="#">Lorem ipsum dolor sit amet.</a>
                                    </h3>
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                    <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                                    <a href="#" className="read-more">read more</a>
                                </div>
                            </div>

                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=503" alt="" />
                                    <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                                </div>
                                <div className="post-content">
                                    <h3 className="post-title">
                                        <a href="#">Lorem ipsum dolor sit amet.</a>
                                    </h3>
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                    <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                                    <a href="#" className="read-more">read more</a>
                                </div>
                            </div>

                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="https://images.unsplash.com/photo-1564979268369-42032c5ca998?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500" alt="" />
                                    <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                                </div>
                                <div className="post-content">
                                    <h3 className="post-title">
                                        <a href="#">Lorem ipsum dolor sit amet.</a>
                                    </h3>
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                    <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                                    <a href="#" className="read-more">read more</a>
                                </div>
                            </div>

                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="https://images.unsplash.com/photo-1576659531892-0f4991fca82b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501" alt="" />
                                    <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                                </div>
                                <div className="post-content">
                                    <h3 className="post-title">
                                        <a href="#">Lorem ipsum dolor sit amet.</a>
                                    </h3>
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                    <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                                    <a href="#" className="read-more">read more</a>
                                </div>
                            </div>

                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=305&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=505" alt="" />
                                    <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                                </div>
                                <div className="post-content">
                                    <h3 className="post-title">
                                        <a href="#">Lorem ipsum dolor sit amet.</a>
                                    </h3>
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                    <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                                    <a href="#" className="read-more">read more</a>
                                </div>
                            </div>

                            <div className="post-slide">
                                <div className="post-img">
                                    <img src="https://images.unsplash.com/photo-1484656551321-a1161420a2a0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=306&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=506" alt="" />
                                    <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                                </div>
                                <div className="post-content">
                                    <h3 className="post-title">
                                        <a href="#">Lorem ipsum dolor sit amet.</a>
                                    </h3>
                                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                    <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                                    <a href="#" className="read-more">read more</a>
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