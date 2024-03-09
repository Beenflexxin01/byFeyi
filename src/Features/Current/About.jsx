import a1 from "../../images/a1.png";


function About() {
  return (
    <>
      <div className="image">
        <img src={a1} alt="" className="h1-img" />
      </div>
      <div className=" container fvt-std">
        <div className="h1 p-h">
          <h1 className="primary-header media-header">
            CREATIVE{" "}
            <span className="arc">
              {" "}
              <br /> . EXPRESSIONS
            </span>
          </h1>
        </div>
        <p className="text-description abt-text fvt">
          <span className="span spn s-p">ABOUT ME</span> Feyi Fakolade embodies
          creativity and versatility as a designer. Specializing in
          architecturem interior, and product design, Feyi brings a dynamic
          blend of innovation and expertise to every endeavor. With a genuine
          love for design, I inivite you to embark on a journey where
          imaginations knows no bounds and each project is infused with passion
          and purpose.
        </p>
      </div>
    </>
  );
}

export default About;
