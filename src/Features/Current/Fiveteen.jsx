import s1 from "../../images/s1.png";
function Fiveteen() {
  return (
    <>
      <div className=" container fvt-std">
        <h2 className="sec-header">FiveteenStudios</h2>
        <p className="text-description abt-text fvt">
          <span className="span spn s-p">ABOUT ME</span> Feyi Fakolade embodies
          creativity and versatility as a designer. Specializing in
          architecturem interior, and product design, Feyi brings a dynamic
          blend of innovation and expertise to every endeavor. With a genuine
          love for design, I inivite you to embark on a journey where
          imaginations knows no bounds and each project is infused with passion
          and purpose.
        </p>

        <div className="flex fl">
          <img src={s1} alt="" className="f-img" />
          <img src={s1} alt="" className="f-img" />
          <img src={s1} alt="" className="f-img" />
        </div>
        <div className="flex-text">
          <p className="text tx">website</p>
          <p className="text tx">Instagram</p>
        </div>
      </div>
    </>
  );
}

export default Fiveteen;
