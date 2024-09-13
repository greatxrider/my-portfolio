import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"

//components
import Header from "./components/Header/Header";
import Headline from "./components/Headline/Headline";
import About from "./components/About/About";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Headline />
      <About />
    </div>
  )
}

export default App
