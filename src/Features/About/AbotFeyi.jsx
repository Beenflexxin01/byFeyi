import s1 from "../../images/a1.png";
function AbotFeyi() {
  return (
    <>
      <div className="image">
        <img src={s1} alt="" className="h1-img" />
      </div>
      <div className=" container about abt">
        <div className="h1">
          <h1 className="primary-header media-header">
            FEYISITAN <br /> <span className="arc">FAKOLADE</span>{" "}
          </h1>
        </div>
        <p className="text-description abt-text">
          <span className="span spn">ABOUT ME</span> Feyi Fakolade embodies
          creativity and versatility as a designer. Specializing in
          architecturem interior, and product design, Feyi brings a dynamic
          blend of innovation and expertise to every endeavor. With a genuine
          love for design, I inivite you to embark on a journey where
          imaginations knows no bounds and each project is infused with passion
          and purpose.
        </p>
        <hr />
        <p className="span spn">DESIGN PHILOSOPHY</p>
        <hr />
        <p className="span spn">MISSION</p>
        <hr />

        <button className="btn view">VIEW SERVICES</button>
        <div className="case-study">
          <h2 className="case-header spn">A</h2>
          <p className="case-text">
            WITHIN THE CASE STUDY'S STORY, BRILLIANCE IGNITES.
          </p>
        </div>
        <h2 className="case-header span-text spn">CASE STUDY*</h2>
      </div>
    </>
  );
}

export default AbotFeyi;
