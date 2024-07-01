import a1 from "../images/a1.png";
import arc1 from "../../public/kiddies/k1.jpg";
import arc2 from "../../public/commercial/c4.jpg";
import arc3 from "../../public/pavillion/pa1.jpg";
import arc4 from "../../public/treehouse/t1.jpg";
import arc5 from "../../public/park/p1.jpg";
import arc6 from "../../public/makoko/m1.jpg";

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
            <p className="text-description text-desc">KIDDIES CENTER</p>
          </div>

          <div
            className="grid-2--cols cursor"
            onClick={() => Navigate("/product/project")}>
            <img src={arc2} alt="" className="arc-img" />
            <p className="text-description text-desc">COMMERCIAL</p>
          </div>

          <div
            className="grid-2--cols cursor"
            onClick={() => Navigate("/product/project")}>
            <img src={arc3} alt="" className="arc-img th" />
            <p className="text-description text-desc">PAVILLION</p>
          </div>

          <div
            className="grid-2--cols cursor"
            onClick={() => Navigate("/product/project")}>
            <img src={arc4} alt="" className="arc-img th" />
            <p className="text-description text-desc">TREEHOUSE</p>
          </div>

          <div
            className="grid-2--cols cursor"
            onClick={() => Navigate("/product/project")}>
            <img src={arc5} alt="" className="arc-img" />
            <p className="text-description text-desc">PARK BOOTH</p>
          </div>

          <div
            className="grid-2--cols cursor"
            onClick={() => Navigate("/product/project")}>
            <img src={arc6} alt="" className="arc-img" />
            <p className="text-description text-desc">MAKOKO</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArchitectureDesign;
