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
          <hi className="primary-header">
            SELECTED <br /> <span className="wk">WORKS</span>
          </hi>
        </div>

        <div className="grid-2">
          <div className="grid-2-cols">
            <img src={s1} alt="" className="img" />
            <div className="block">
              <p className="s-t">
                XI'AN <br /> MASTERPLAN
              </p>
              <p className="s-a">ARCHITECTURE DESIGN</p>
            </div>
          </div>

          <div className="grid-2-cols">
            <div className="bloc">
              <p className="s-t">
                FLOATING <br /> HOUSE
              </p>
              <p className="s-a">INTERIOR DESIGN</p>
            </div>
            <img src={s2} alt="" className="img" />
          </div>

          <div className="grid-2-cols">
            <img src={s3} alt="" className="img" />
            <div className="block">
              <p className="s-t">
                SLEEPLESS <br /> NIGHTS
              </p>
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
