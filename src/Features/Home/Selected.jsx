import s1 from "../../images/s1.png";
import s2 from "../../images/s2.png";
import s3 from "../../images/s3.png";

function Selected() {
  return (
    <>
      <div className="container port">
        <div className="port-serv">
          <p className="serv">PORTFOLIO</p>
          <p className="serv">SEE ALL PORTFOLIO</p>
        </div>
        <div className="arch">
          <h1 className="primary-header">
            SELECTED <br /> <span className="wk">WORKS</span>
          </h1>
        </div>

        <div className="grid-">
          <div className=" grid-_2-cols">
            <img src={s1} alt="" className="img" />
            <div className="block">
              <p className="s-t">XI'AN MASTERPLAN</p>
              <p className="s-a">ARCHITECTURE DESIGN</p>
            </div>
          </div>

          <div className=" grid-_2-cols">
            <div className="bloc">
              <p className="s-t">FLOATING HOUSE</p>
              <p className="s-a">INTERIOR DESIGN</p>
            </div>
            <img src={s2} alt="" className="img" />
          </div>

          <div className="grid-_2-cols overflow">
            <img src={s3} alt="" className="img" />
            <div className="block">
              <p className="s-t">SLEEPLESS NIGHTS</p>
              <p className="s-a">PRODUCT DESIGN</p>
            </div>
          </div>
        </div>
        <div className="see">SEE ALL</div>
        <div className="port-serv">
          <p className="serv">BLOGS</p>
          <p className="serv">SEE ALL BLOGS</p>
        </div>
      </div>
    </>
  );
}

export default Selected;
