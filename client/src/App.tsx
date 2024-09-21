//components
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Certificates from "./components/Certificates/Certificates";
import MyStory from "./components/MyStory/MyStory";
import PortfolioContainer from "./components/Portfolio/PortfolioContainer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate replace to="all" />} />
          <Route path="all" element={<PortfolioContainer count={2} />} />
          <Route path="uiux" element={<PortfolioContainer count={4} />} />
          <Route path="web" element={<PortfolioContainer count={6} />} />
          <Route path="mobile" element={<PortfolioContainer count={8} />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Route>
        <Route path="aboutme" element={<MyStory />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
