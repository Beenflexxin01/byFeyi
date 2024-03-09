import { useNavigate } from "react-router-dom";
import a1 from "../images/a1.png";
import arc1 from "../images/int 1.png";
import arc2 from "../images/int 2.png";
import arc3 from "../images/int 3.png";
import arc4 from "../images/int 4.png";
import arc5 from "../images/int 5.png";
import arc6 from "../images/int 6.png";
import Footer from "../UI/Footer";

function Intertiro() {
  const Navigate = useNavigate();

  return (
    <>
      <div className="image">
        <img src={a1} alt="" className="h1-img" />
      </div>
      <div className=" container">
        <div className="h1 arc-h1">
          <h1 className="primary-header media-header">
            INTERIOR <br /> <span className="arc">DESIGN</span>
          </h1>
          <p className="port-text" onClick={() => Navigate("/portfolio")}>
            Back to Portfolio
          </p>
        </div>
        <div className="grid--2">
          <div className="grid-2--cols">
            <img src={arc1} alt="" className="arc-img" />
            <p className="text-description text-desc">PROJECT TITLE</p>
          </div>

          <div className="grid-2--cols">
            <img src={arc2} alt="" className="arc-img" />
            <p className="text-description text-desc">PROJECT TITLE</p>
          </div>

          <div className="grid-2--cols">
            <img src={arc3} alt="" className="arc-img" />
            <p className="text-description text-desc">PROJECT TITLE</p>
          </div>

          <div className="grid-2--cols">
            <img src={arc4} alt="" className="arc-img" />
            <p className="text-description text-desc">PROJECT TITLE</p>
          </div>

          <div className="grid-2--cols">
            <img src={arc5} alt="" className="arc-img" />
            <p className="text-description text-desc">PROJECT TITLE</p>
          </div>

          <div className="grid-2--cols">
            <img src={arc6} alt="" className="arc-img" />
            <p className="text-description text-desc">PROJECT TITLE</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Intertiro;
