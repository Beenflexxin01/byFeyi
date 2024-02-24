import AboutMe from "../Features/Home/AboutMe";
import Architecture from "../Features/Home/Architecture";
import Blog from "../Features/Home/Blog";
import MainPage from "../Features/Home/MainPage";
import Selected from "../Features/Home/Selected";
import Footer from "../UI/Footer";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <MainPage />
      <AboutMe />
      <Architecture />
      <Selected />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
