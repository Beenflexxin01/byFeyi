import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
function MainNav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav-ul">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <li className="main-nav-li">
          <NavLink className="nav-link" to="/">
            HOME
          </NavLink>
        </li>
        <li className="main-nav-li">
          <NavLink className="nav-link" to="/about">
            ABOUT
          </NavLink>
        </li>
        <li className="main-nav-li">
          <NavLink className="nav-link" to="/services">
            SERVICES
          </NavLink>
        </li>
        <li className="main-nav-li">
          <NavLink className="nav-link" to="/portfolio">
            PORTFOLIO
          </NavLink>
        </li>
        <li className="main-nav-li">
          <NavLink className="nav-link" to="/blog">
            BLOG
          </NavLink>
        </li>
        <li className="main-nav-li">
          <NavLink className="nav-link" to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
