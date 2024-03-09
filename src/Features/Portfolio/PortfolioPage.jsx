import { useNavigate } from "react-router-dom";
import a1 from "../../images/a1.png";
import s1 from "../../images/s1.png";
import s2 from "../../images/s2.png";
import s3 from "../../images/s3.png";
function PortfolioPage() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="image">
        <img src={a1} alt="" className="h1-img" />
      </div>
      <div className=" container about abt">
        <div className="h1 portfolio-h1">
          <h1 className="primary-header portfolio-header media-header">
            DESIGN <br /> <span className="arc">PORTFOLIO</span>
          </h1>
        </div>

        <div className="grid-2">
          <div
            className="grid-2-cols p-m"
            onClick={() => Navigate("/architecture")}>
            <img src={s1} alt="" className="img" />
            <div className="block">
              <p className="s-a p-t">
                ARCHITECTURE <br /> DESIGN
              </p>
            </div>
          </div>

          <div
            className="grid-2-cols p-m"
            onClick={() => Navigate("/interior")}>
            <div className="p-l bloc">
              <p className="s-a p-t">
                INTERIOR <br /> DESIGN
              </p>
            </div>
            <img src={s2} alt="" className="img port-img" />
          </div>

          <div className="grid-2-cols p-m" onClick={() => Navigate("/product")}>
            <img src={s3} alt="" className="img " />
            <div className="block">
              <p className="s-a p-t">
                PRODUCT <br /> DESIGN
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioPage;
