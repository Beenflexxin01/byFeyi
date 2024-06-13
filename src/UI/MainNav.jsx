import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from "react";
function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffMenuBar = () => setIsOpen(!isOpen);

  return (
    <nav className="main-nav">
      <div className="logo-img">
        <NavLink to="/" id="home">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <ul className="main-nav-ul">
        <div
          className={`burger ${isOpen && "open"} `}
          onClick={() => setIsOpen(!isOpen)}>
          <div className="burger_bar"></div>
          <div className="burger_bar bar"></div>
          <div className="burger_bar bar3"></div>
        </div>

        <div className={`burger-menu ${isOpen ? "open" : ""}`}>
          <li className="main-nav-li">
            <NavLink className="nav-link" to="/" onClick={toggleOffMenuBar}>
              HOME
            </NavLink>
          </li>
          <li className="main-nav-li">
            <NavLink
              className="nav-link"
              to="/about"
              onClick={toggleOffMenuBar}>
              ABOUT
            </NavLink>
          </li>
          {/* <li className="main-nav-li">
            <NavLink
              className="nav-link"
              to="/services"
              onClick={toggleOffMenuBar}>
              SERVICES
            </NavLink>
          </li> */}
          <li className="main-nav-li">
            <NavLink
              className="nav-link"
              to="/portfolio"
              onClick={toggleOffMenuBar}>
              PORTFOLIO
            </NavLink>
          </li>
          {/* <li className="main-nav-li">
            <NavLink className="nav-link" to="/blog" onClick={toggleOffMenuBar}>
              BLOG
            </NavLink>
          </li> */}
          <li className="main-nav-li">
            <NavLink
              className="nav-link"
              to="/contact"
              onClick={toggleOffMenuBar}>
              CONTACT
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default MainNav;
