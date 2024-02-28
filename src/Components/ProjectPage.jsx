import { useNavigate } from "react-router-dom";
import a1 from "../images/a1.png";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import s1 from "../images/s1.png";
import Footer from "../UI/Footer";

function ProjectPage() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="image">
        <img src={a1} alt="" className="h1-img" />
      </div>
      <div className=" container">
        <div className="h1 arc-h1">
          <h1 className="primary-header ">
            PROJECT <br /> <span className="arc prod-design">NAME</span>
          </h1>
          <p className="port-text" onClick={() => Navigate("/portfolio")}>
            Back to Portfolio
          </p>
        </div>
        <div className="grid--2">
          <div className="grid-2--cols grid-margin">
            <h3 className="tertiary-header">Project Details</h3>
            <div className="details">
              <p className="details-text">Date:</p>
              <p className="details-text">May, 2023</p>
            </div>
            <div className="details">
              <p className="details-text">Project Type:</p>
              <p className="details-text">May, 2023</p>
            </div>
            <div className="details">
              <p className="details-text">Tools</p>
              <p className="details-text">Lorem Ipsum</p>
            </div>
          </div>

          <div className="grid-2--cols grid-margin">
            <h3 className="tertiary-header">Description</h3>
            <p className="details-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              quo, temporibus quia molestiae maiores corrupti vitae ut non error
              quidem quisquam optio modi, facilis iste harum officiis esse,
              totam voluptatem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Porro quo, temporibus quia molestiae maiores
              corrupti vitae ut non error quidem quisquam optio modi, facilis
              iste harum officiis esse, totam voluptatem. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Porro quo, temporibus quia
              molestiae maiores corrupti vitae ut non error quidem quisquam
              optio modi, facilis iste harum officiis esse, totam voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              quo, temporibus quia molestiae maiores corrupti vitae ut non error
              quidem quisquam optio modi, facilis iste harum officiis esse,
              totam voluptatem.
            </p>
          </div>
        </div>
        <div className="imgs">
          <img src={p1} alt="" className="p-img" />
          <img src={p2} alt="" className="p-img" />
          <img src={p3} alt="" className="p-img" />
          <img src={p4} alt="" className="p-img" />
        </div>

        <div className="tertiary-header">
          OTHER PROJECTS
          <div className="grid-3">
            <div className="grid-3-cols">
              <img src={s1} alt="" className="grid-3-img" />

              <div className="grid-4-txt">
                <p className="text">DECEMBER 6, 2024</p>
                <h4 className="nur-header">SLEEPLESS NIGHTS</h4>
              </div>
                      </div>
                      
            <div className="grid-3-cols">
              <img src={s1} alt="" className="grid-3-img" />

              <div className="grid-4-txt">
                <p className="text">DECEMBER 6, 2024</p>
                <h4 className="nur-header">SLEEPLESS NIGHTS</h4>
              </div>
            </div>
            <div className="grid-3-cols">
              <img src={s1} alt="" className="grid-3-img" />

              <div className="grid-4-txt">
                <p className="text">DECEMBER 6, 2024</p>
                <h4 className="nur-header">SLEEPLESS NIGHTS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectPage;
