import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"

//components
import Header from "./components/Header/Header";
import Headline from "./components/Headline/Headline";
import About from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Certifications from "./components/Certifications/Certifications";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/MyServices/Services";
import Featured from "./components/Featured/Featured";
import Testimonials from "./components/Testimonials/Testimonials";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
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
      <Footer />
    </div>
  )
}

export default App
