import feyi from "../../images/feyi.png";
function MainPage() {
  return (
    <>
      <div className="header-container">
        <div className="home">
          <div className="flex">
            <img src={feyi} alt="" className="f-i" />
            <p className="h1-text">FEYI FAKOLADE</p>
          </div>
          <div className="flex m-l">
            <p className="h1-text">CREATIVE</p>
            <p className="text">
              WELCOME TO MY DESIGN JOURNEY, WHERE MY PASSION FOR CREATIVITY
              INTERSECTS WITH PRACTICALITY. I SPECIALIZE IN ARCHITECTURAL
              DESGIN, PRODUCT DESIGN, AND INTERIOR DESIGN.
            </p>
          </div>
          <p className="h1-text a-t">SPACE</p>
          <p className="text m_l">
            SPECIALIZED IN ARCHITECTURAL, INTERIOR & PRODUCT DESIGN
          </p>
        </div>
      </div>
    </>
  );
}

export default MainPage;
