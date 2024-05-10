import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../UI/Loader";
import BackendLink from "../../utils/BackendLink";
import Footer from "../../UI/Footer";
function BlogContents() {
  const [blogDetails, setBlogsDetails] = useState({});

  const [isLoading, setIsLoading] = useState();
  const { id } = useParams();

  const {
    title,
    titleBreak,
    image,
    publishedDate,
    symbol,
    design,
    design2,
    author,
    designImg,
    pse,
    inspiration,
    inspirationImg,
    designProcess,
    DesignProcess,
    designProcessImg,
    significance,
    material,
    materialParagraph,
    fashion,
    printing,
    img,
    feedback,
    lesson,
    credit,
    logo,
    theDesign,
    palms,
    theInspiration,
    materials,
    print,
    sigMean,
    MatColor,
    drawnLesson,
    Feedback,
    Credit,
    Logo,
    logoImg,
  } = blogDetails;

  useEffect(
    function () {
      async function getBlogDetails() {
        try {
          setIsLoading(true);
          const res = await fetch(`${BackendLink}/api/blogs/${id}`);
          if (!res.ok)
            throw new Error(
              "There is something wrong displaying the blog data"
            );

          const data = await res.json();
          if (data.Response === "False")
            throw new Error("Error loading blog data! Try again.");
          setBlogsDetails(data);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
      getBlogDetails();
    },
    [id]
  );
  return (
    <>
      <div className="blog-container">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <img src={image} alt={title} className="blog-image" />
            <div className="blog-content ">
              <h2 className="primary-header h2">
                {title} {titleBreak}
              </h2>
              <div className="design-div grid-4-txt">
                <p className=" blog-description blog-texts">{publishedDate}</p>
                <li className=" blog-description blog-texts blog-li">
                  {author}
                </li>
              </div>
              <p className="text-description blog-description blog-text blog-text">
                {symbol}
              </p>
              <h2 className="secondary-header">{Logo}</h2>
              <p className="text-description blog-description blog-text ">
                {logo}
              </p>
              <img src={logoImg} alt={title} className="blog-img" />
              <h2 className="secondary-header">{theDesign}</h2>
              <p className="text-description blog-description blog-text">
                {design}
              </p>
              <p className="text-description blog-description blog-text">
                {design2}
              </p>
              <img src={designImg} alt={title} className="blog-img" />
              <h2 className="secondary-header">{palms}</h2>
              <p className="text-description blog-description blog-text">
                {pse}
              </p>
              <h2 className="secondary-header">{theInspiration}</h2>
              <p className="text-description blog-description blog-text">
                {inspiration}
              </p>
              <img src={inspirationImg} alt={title} className="blog-img" />
              <h2 className="secondary-header">{DesignProcess}</h2>
              <p className="text-description blog-description blog-text">
                {designProcess}
              </p>
              <img src={designProcessImg} alt={title} className="blog-img" />
              <h2 className="secondary-header">{sigMean}</h2>
              <p className="text-description blog-description blog-text">
                {significance}
              </p>
              <h2 className="secondary-header">{MatColor}</h2>
              <p className="text-description blog-description blog-text">
                {material}
              </p>
              <p className="text-description blog-description blog-text">
                {materialParagraph}
              </p>
              <p className="text-description blog-description blog-text">
                <strong>{materials}</strong>
                {fashion}
              </p>
              <p className="text-description blog-description blog-text">
                <strong>{print} </strong>
                {printing}
              </p>
              <img src={img} alt={title} className="blog-img" />
              <h2 className="secondary-header">{Feedback}</h2>
              <p className="text-description blog-description blog-text">
                {feedback}
              </p>
              <h2 className="secondary-header">{drawnLesson}</h2>
              <p className="text-description blog-description blog-text">
                {lesson}
              </p>
              <p className="text-description blog-description blog-text italic">
                {Credit}
                {credit}
              </p>
              <p className="text-description blog-description ">
                Please <Link to="/productPage/:id">CLICK HERE</Link> to check
                out the product in our store.
              </p>
              <div className="blog-margin">
                <p className="blog--link">
                  <Link to="/blog" className=" blog-link">
                    &larr; Back to blog
                  </Link>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <>
        <Footer />
      </>
    </>
  );
}

export default BlogContents;
