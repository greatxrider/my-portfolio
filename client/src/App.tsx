//components
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Certificates from "./components/Certificates/Certificates";
import MyStory from "./components/MyStory/MyStory";
import PortfolioContainer from "./components/Portfolio/PortfolioContainer";

// Hooks
import { useState, useEffect } from "react";
import useFetchData from "./hooks/useFetchData";

// Components
import Loading from "./components/Loading/Loading";

// Define types for the education data and errors
interface ProjectsItem {
  title: string;
  description: string;
  imageUrlDesktop: string;
  imageUrlMobile: string;
  deviceType: string;
  githubLink: string;
  liveLink: string;
  categoryName: string;
  isFeatured: boolean;
  categoryId: number;
  userId: number;
}

interface CategoriesItem {
  name: string;
  description: string;
  categoryId: number;
  userId: number
}

const App = () => {
  const { fetchData, loading, setLoading } = useFetchData();
  const [categories, setCategories] = useState<CategoriesItem[]>([]);
  const [projects, setProjects] = useState<ProjectsItem[]>([]);

  useEffect(() => {
    setLoading(true);
    fetchData('/categories', setCategories);
    fetchData('/projects', setProjects);
  }, [setLoading]);

  if (loading) {
    return <Loading />; // Render the Loading component while loading
  }

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home categories={categories} />}>
          <Route index element={<Navigate replace to="all" />} />
          {categories.length > 0 && (
            <>
              <Route path="all" element={<PortfolioContainer categories={categories[0]} />} />
              <Route path="uiux" element={<PortfolioContainer categories={categories[1]} />} />
              <Route path="web" element={<PortfolioContainer categories={categories[2]} />} />
              <Route path="mobile" element={<PortfolioContainer categories={categories[3]} />} />
            </>
          )}
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Route>
        <Route path="aboutme" element={<MyStory />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App