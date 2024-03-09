import { useNavigate } from "react-router-dom";
import a1 from "../images/a1.png";
import s1 from "../images/s1.png";

function BlogPage() {
  const Navigate = useNavigate();

  return (
    <>
      <div className="image">
        <img src={a1} alt="" className="h1-img" />
      </div>
      <div className=" container">
        <div className="h1 arc-h1">
          <h1 className="primary-header media-header">
            A <br /> <span className="arc">CASE STUDY *</span>
          </h1>
          <p className="port-text " onClick={() => Navigate("/portfolio")}>
            Back to Portfolio
          </p>
        </div>
        <div className="grid-3">
          <div className="grid-3-cols cols">
            <img src={s1} alt="" className="grid-3-img" />
            <div className="grid-4-txt">
              <p className="text blog-width">DECEMBER 8, 2023</p>
              <h4 className="nur-header">BLOG TITLES</h4>
            </div>
          </div>

          <div className="grid-3-cols cols">
            <img src={s1} alt="" className="grid-3-img" />
            <div className="grid-4-txt">
              <p className="text blog-width">DECEMBER 8, 2023</p>
              <h4 className="nur-header">BLOG TITLES</h4>
            </div>
          </div>
          <div className="grid-3-cols cols">
            <img src={s1} alt="" className="grid-3-img" />
            <div className="grid-4-txt">
              <p className="text blog-width">MARCH 5, 2024</p>
              <h4 className="nur-header">BLOG TITLES</h4>
            </div>
          </div>
          <div className="grid-3-cols cols">
            <img src={s1} alt="" className="grid-3-img" />
            <div className="grid-4-txt">
              <p className="text blog-width">DECEMBER 8, 2023</p>
              <h4 className="nur-header">BLOG TITLES</h4>
            </div>
          </div>

          <div className="grid-3-cols cols">
            <img src={s1} alt="" className="grid-3-img" />
            <div className="grid-4-txt">
              <p className="text blog-width">DECEMBER 8, 2023</p>
              <h4 className="nur-header">BLOG TITLES</h4>
            </div>
          </div>
          <div className="grid-3-cols cols">
            <img src={s1} alt="" className="grid-3-img" />
            <div className="grid-4-txt">
              <p className="text blog-width">MARCH 5, 2024</p>
              <h4 className="nur-header">BLOG TITLES</h4>
            </div>
          </div>
          <div className="grid-3-cols cols">
            <img src={s1} alt="" className="grid-3-img" />
            <div className="grid-4-txt">
              <p className="text blog-width">DECEMBER 8, 2023</p>
              <h4 className="nur-header">BLOG TITLES</h4>
            </div>
          </div>

          <div className="grid-3-cols cols">
            <img src={s1} alt="" className="grid-3-img" />
            <div className="grid-4-txt">
              <p className="text blog-width">DECEMBER 8, 2023</p>
              <h4 className="nur-header">BLOG TITLES</h4>
            </div>
          </div>
          <div className="grid-3-cols cols">
            <img src={s1} alt="" className="grid-3-img" />
            <div className="grid-4-txt">
              <p className="text blog-width">MARCH 5, 2024</p>
              <h4 className="nur-header">BLOG TITLES</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
