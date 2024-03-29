import s1 from "../../images/s1.png";

function Blog() {
  return (
    <>
      <div className="container">
        <div className="blog">
          <div className="sleepless">
            <img src={s1} alt="Blog-img" className="b-img" />
            <div className="grid-4-txt">
              <p>DECEMBER 8, 2023</p>
              <p className="s-t">
                SLEEPLESS NIGHTS
              </p>
            </div>
          </div>

          <div className="sleepless s-1">
            <img src={s1} alt="Blog-img" className="b-img" />
            <div className="grid-4-txt">
              <p>DECEMBER 10, 2023</p>
              <p className="s-t">
                SLEEPLESS NIGHTS
              </p>
            </div>
          </div>

          <div className="sleepless s-1 s-2">
            <img src={s1} alt="Blog-img" className="b-img" />
            <div className="grid-4-txt">
              <p>MARCH 5, 2024</p>
              <p className="s-t">
                SLEEPLESS NIGHTS
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="moving">
          <p className="move">THIS IS A MOVING AD</p>
        </div>
        <div className="b-o"></div>
    </>
  );
}

export default Blog;
