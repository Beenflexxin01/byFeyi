import { Link } from "react-router-dom";
import feyi from "../../images/feyi.png";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function MainPage() {
  return (
    <>
      <div className="header-container">
        <div className="home">
          <div className="flex ml">
            <img src={feyi} alt="" className="f-i" />
            <p className="h1-text">FEYI FAKOLADE</p>
          </div>
          <div className="flex m-l media-flex">
            <p className="h1-text media-create">CREATIVE</p>
            <p className="text media-text">
              WELCOME TO MY DESIGN JOURNEY, WHERE MY PASSION FOR CREATIVITY
              INTERSECTS WITH PRACTICALITY. I SPECIALIZE IN ARCHITECTURAL
              DESGIN, PRODUCT DESIGN, AND INTERIOR DESIGN.
            </p>
          </div>
          <p className="h1-text a-t media-space">SPACE</p>
          <p className="text m_l">
            SPECIALIZED IN ARCHITECTURAL, INTERIOR & PRODUCT DESIGN
          </p>
        </div>
      </div>
      <div className="social-icons">
        <Link
          to="https://www.instagram.com/byfeyifakolade/"
          target="blank"
          className="icon-link">
          <FaInstagram size={"24px"} className="icons" />
        </Link>
        <Link
          to="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAABd9shkBMew87EuBY_o5Uletdq3zKMcpWzo&keywords=feyi%20fakolade&origin=RICH_QUERY_SUGGESTION&position=0&searchId=95f065bd-70e9-4e7f-aed3-91bf7807647d&sid=Hk0&spellCorrectionEnabled=false"
          target="blank"
          className="icon-link">
          <FaLinkedin size={"24px"} className="icons" />
        </Link>
      </div>
    </>
  );
}

export default MainPage;
