import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Service from "./Pages/Service";
import PageNotFound from "./Pages/PageNotFound";
import About from "./Pages/About";
import Curent from "./Components/Curent";
import ArchitectureDesign from "./Components/ArchitectureDesign";
import Intertiro from "./Components/Intertiro";
import ProjectPage from "./Components/ProjectPage";
import BlogContents from "./Features/Blogs/BlogContents";
import Product from "./Components/Products/Product";
import ProductPage from "./Components/Products/ProductPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blogs/journals/:id" element={<BlogContents />} />
            <Route path="productPage/:id" element={<ProductPage />} />
            <Route path="services" element={<Service />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="current" element={<Curent />} />
            <Route path="architecture" element={<ArchitectureDesign />} />
            <Route path="interior" element={<Intertiro />} />
            <Route path="product" element={<Product />} />
            <Route path="product/project" element={<ProjectPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
