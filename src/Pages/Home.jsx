import AboutMe from "../Features/Home/AboutMe";
import Architecture from "../Features/Home/Architecture";
import Blog from "../Features/Home/Blog";
import MainPage from "../Features/Home/MainPage";
import Selected from "../Features/Home/Selected";
import Footer from "../UI/Footer";
import ContactPage from "../Features/Home/ContactPage";

function Home() {
  return (
    <div>
      <MainPage />
      <AboutMe />
      <Architecture />
      <Selected />
      <Blog />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default Home;
