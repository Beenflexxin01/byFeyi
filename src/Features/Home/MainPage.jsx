import feyi from "../../images/feyi.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function MainPage() {
  return (
    <>
      <div className="header-container">
        <div className="home">
          <div className="media-grid">
            <div className="flex ml">
              <img src={feyi} alt="" className="f-i" />
              <p className="h1-text">FEYI FAKOLADE</p>
            </div>
            <div className="flex m-l media-flex">
              <p className="h1-text">CREATIVE</p>
              <p className="text media-text">
                WELCOME TO MY DESIGN JOURNEY, WHERE MY PASSION FOR CREATIVITY
                INTERSECTS WITH PRACTICALITY. I SPECIALIZE IN ARCHITECTURAL
                DESGIN, PRODUCT DESIGN, AND INTERIOR DESIGN.
              </p>
            </div>
            <p className="h1-text a-t">SPACE</p>
            <p className="text m_l media-text">
              SPECIALIZED IN ARCHITECTURAL, INTERIOR & PRODUCT DESIGN
            </p>
          </div>
        </div>
          <div className="social-icons">
            <FaInstagram size={"24px"} className="icons" />
            <FaFacebook size={"24px"} className="icons" />
            <FaTwitter size={"24px"} className="icons" />
          </div>
      </div>
    </>
  );
}

export default MainPage;
