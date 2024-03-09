import a1 from "../images/a1.png";
import arc1 from "../images/s1.png";
import arc2 from "../images/arc 1.png";
import arc3 from "../images/arc 2.png";
import arc4 from "../images/arc3.png";
import arc5 from "../images/arc 4.png";
import arc6 from "../images/arc 5.png";
import Footer from "../UI/Footer";
import { Link, useNavigate } from "react-router-dom";
function ArchitectureDesign() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="image">
        <img src={a1} alt="" className="h1-img" />
      </div>
      <div className=" container">
        <div className="h1 arc-h1">
          <h1 className="primary-header media-header">
            ARCHITECTURE <br /> <span className="arc arc-design">DESIGN</span>
          </h1>
          <p className="port-text" onClick={() => Navigate("/portfolio")}>
            <Link to={"/portfolio"} className="port-text">
              Back to Portfolio
            </Link>
          </p>
        </div>
        <div className="grid--2">
          <div
            className="grid-2--cols cursor"
            onClick={() => Navigate("/product/project")}>
            <img src={arc1} alt="" className="arc-img" />
            <p className="text-description text-desc">PROJECT TITLE</p>
          </div>

          <div className="grid-2--cols cursor">
            <img src={arc2} alt="" className="arc-img" />
            <p className="text-description text-desc">PROJECT TITLE</p>
          </div>

          <div className="grid-2--cols cursor">
            <img src={arc3} alt="" className="arc-img" />
            <p className="text-description text-desc">PROJECT TITLE</p>
          </div>

          <div className="grid-2--cols cursor">
            <img src={arc4} alt="" className="arc-img" />
            <p className="text-description text-desc">PROJECT TITLE</p>
          </div>

          <div className="grid-2--cols cursor">
            <img src={arc5} alt="" className="arc-img" />
            <p className="text-description text-desc">PROJECT TITLE</p>
          </div>

          <div className="grid-2--cols cursor">
            <img src={arc6} alt="" className="arc-img" />
            <p className="text-description text-desc">PROJECT TITLE</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArchitectureDesign;
