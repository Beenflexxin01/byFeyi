import { useNavigate } from "react-router-dom";
import s1 from "../images/a1.png";

function Services() {
  const navigate = useNavigate();
  return (
    <>
      <div className="image">
        <img src={s1} alt="" className="h1-img" />
      </div>
      <div className="container">
        <div className="h1 arc-h1">
          <h1 className="primary-header media-header">
            SERVICE <br /> <span className="arc">OFFERINGS</span>{" "}
          </h1>
        </div>
        <p className="text-description abt-text">
          <span className="span spn">OUR VALUES</span> Feyi Fakolade embodies
          creativity and versatility as a designer. Specializing in
          architecturem interior, and product design, Feyi brings a dynamic
          blend of innovation and expertise to every endeavor. With a genuine
          love for design, I inivite you to embark on a journey where
          imaginations knows no bounds and each project is infused with passion
          and purpose.
        </p>
      </div>

      <div className="service">
        <p className="ser">SERVICES</p>
        <p className="ser">SEE ALL BLOGS</p>
      </div>
      <div className="container arch">
        <h1 className="primary-header arc hover">ARCHITECTURE</h1>
        <h1 className="primary-header hover">INTERIOR</h1>
        <div className="prodd" onClick={() => navigate("/product")}>
          <h1 className="primary-header arc hover">PRODUCT</h1>
        </div>
      </div>
      <div className="service s-s">
        <p className="serv">SERVICES</p>
        <p className="serv serv-btn">GET A PROPOSAL</p>
      </div>
    </>
  );
}

export default Services;
