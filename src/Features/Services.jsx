import s1 from "../images/a1.png";

function Services() {
  return (
    <>
      <div className="image">
        <img src={s1} alt="" className="h1-img" />
      </div>
      <div className="container">
        <div className="h1 arc-h1">
          <h1 className="primary-header ">
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
        <h1 className="primary-header arc">ARCHITECTURE</h1>
        <h1 className="primary-header">INTERIOR DESIGN</h1>
        <h1 className="primary-header arc">PRODUCT DESIGN</h1>
      </div>
      <div className="service s-s">
        <p className="serv">SERVICES</p>
        <p className="serv serv-btn">GET A PROPOSAL</p>
      </div>
    </>
  );
}

export default Services;
