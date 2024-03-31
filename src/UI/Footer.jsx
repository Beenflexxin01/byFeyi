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

          <div className="engineer">
            <p className="eng">
              Site Designed By{" "}
              <Link
                to="https://www.linkedin.com/in/feyifakz/"
                target="blank"
                className="eng-link">
                Feyi Fakolade
              </Link>{" "}
              And Developed By {" "}
              <Link
                to="https://www.byfeyi.netlify.app"
                target="blank"
                className="eng-link">
                 Omotayo Adenola.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
