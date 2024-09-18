import Headline from "../Headline/Headline";
import About from "../About/About";
import Experiences from "../Experiences/Experiences";
import Certifications from "../Certifications/Certifications";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../MyServices/Services";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <>
            <Headline />
            <About />
            <Experiences />
            <Certifications />
            <Portfolio />
            <Services />
            <Featured />
            <Testimonials />
            <Blog />
            <Contact />
        </>
    );
}

export default Home;