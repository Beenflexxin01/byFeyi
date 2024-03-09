import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo-w.png";

function Footer() {
  return (
    <>
      <div className="containr">
        <div className="footer">
          <nav className="footer-nav">
            <li>
              <NavLink to="/" className="nav-link footer-link"></NavLink>
              <img src={logo} alt="" className="footer-img" />
            </li>
            <ul className="main-nav-ul footer-nav-ul">
              <li className="main-nav-li">
                <NavLink className="nav-link footer-link">INSTAGRAM</NavLink>
              </li>

              <li className="main-nav-li">
                <NavLink className="nav-link footer-link">TIKTOK</NavLink>
              </li>

              <li className="main-nav-li">
                <NavLink className="nav-link footer-link">LINKEDIN</NavLink>
              </li>

              <li className="main-nav-li">
                <NavLink className="nav-link footer-link">BEHANCE</NavLink>
              </li>
            </ul>
            <p className="main-nav-li">
              <NavLink className="nav-link footer-link">TOP</NavLink>
            </p>
          </nav>
          <p className="text-description footer-des">
            WEBSITE LAYOUT DESIGN BY FEYI FAKOLADE
          </p>
          <p className="text-description footer-des">
            <Link
              to="https://nola-portfolio.netlify.app/"
              className="link"
              target="blank">
              ENGINEERED BY OMOTAYO ADENOLA
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
