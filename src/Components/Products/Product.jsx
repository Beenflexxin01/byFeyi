import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Footer from "../../UI/Footer";
import BackendLink from "../../utils/BackendLink";
import a1 from "../../images/a1.png";

function Products({ addProductToCart, products }) {
  const [product, setProducts] = useState([]);
  const Navigate = useNavigate();
  useEffect(function () {
    async function getProductList() {
      try {
        const res = await fetch(`${BackendLink}/api/products`);
        if (!res.ok)
          throw new Error(
            "Something went wrong while loading the products from the database."
          );
        const data = await res.json();
        if (data.Response === "False") throw new Error("Product not found");
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }
    getProductList();
  }, []);

  return (
    <>
      <div className="image">
        <img src={a1} alt="" className="h1-img pro" />
      </div>
      <div className="h1 arc-h1">
        <h1 className="primary-header media-header">
          PRODUCT <br /> <span className="arc prod-design">DESIGN</span>
        </h1>
        <p className="port-text" onClick={() => Navigate("/portfolio")}>
          Back to Portfolio
        </p>
      </div>
      {/* <h1 className="primary-header h1">Products</h1> */}

      <div className="grid-3">
        {product &&
          product.map(function (product) {
            return (
              <ProductList
                key={product._id}
                product={product}
                products={products}
                addProductToCart={addProductToCart}
              />
            );
          })}
      </div>
      <Footer />
    </>
  );
}

export default Products;
