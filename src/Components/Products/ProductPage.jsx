import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../UI/Footer";
import Loader from "../../UI/Loader";
import BackendLink from "../../utils/BackendLink";
// import OtherProducts from "../../UI/ProductCollections";
// import CartFunction from "../../UI/CartFunction";

function ProductPage() {
  const [product, setProductData] = useState({});

  const [isLoading, setIsLoading] = useState();

  const { id } = useParams();
  const {
    title,
    titleBreak,
    image,
    description,
    date: projectDate,
    projectType,
    tools, tool, dat, details, desc, clothing
  } = product;

  useEffect(
    function () {
      async function getProductDetails() {
        try {
          const res = await fetch(`${BackendLink}/api/products/${id}`);
          if (!res.ok)
            throw new Error(
              "Something went wrong while loading the blogs from the database."
            );
          const data = await res.json();

          if (data.Response === "False") throw new Error("Blogs not found");
          setProductData(data);

          setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
      getProductDetails();
    },
    [id]
  );

  const navigate = useNavigate();

  return (
    <>
      <div className="">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="image">
              <img src={image} alt="" className="h1-img" />
            </div>
            <div className="h1 arc-h1 m-h">
              <h1 className="primary-header media-header">
                {title} <br />{" "}
                <span className="arc prod-design">{titleBreak}</span>
              </h1>
            </div>
            <div className="container products">
              <div className="grid--2 grid-block">
                <div className="grid-2--cols grid-margin">
                  <h3 className="tertiary-header">{details}</h3>
                  <div className="details">
                    <p className="details-text">{dat}</p>
                    <p className="details-text">{projectDate}</p>
                  </div>
                  <div className="details">
                    <p className="details-text">{projectType}</p>
                      <p className="details-text">{ clothing}</p>
                  </div>
                  <div className="details">
                    <p className="details-text">{tool}</p>
                    <p className="details-text">{tools}</p>
                  </div>
                </div>

                <div className="grid-2--cols grid-margin">
                  <h3 className="tertiary-header">{desc}</h3>
                  <p className="details-text">{description}</p>
                </div>
              </div>
              <p className="port-text pr" onClick={() => navigate("/product")}>
                Back to Product Lists
              </p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
