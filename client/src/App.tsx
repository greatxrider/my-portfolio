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

const App = () => {
  return (
    <div className="container">
      <Header />
      <Headline />
      <About />
      <Experiences />
      <Certifications />
      <Portfolio />
    </div>
  )
}

export default App
