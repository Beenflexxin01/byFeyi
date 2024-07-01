import { useNavigate } from "react-router-dom";
import Architecture from "./Home/Architecture";

function Services() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
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

      <Architecture />

      <div className="moving mov">
        <button className="move move-btn" onClick={() => navigate("/current")}>
          CLICK HERE TO SEE ALL I'M CURRENTLY BUILDING
        </button>
      </div>
    </>
  );
}

export default Services;
