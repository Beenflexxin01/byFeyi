import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Footer from "../../UI/Footer";
import BackendLink from "../../utils/BackendLink";

function Products({ addProductToCart, products }) {
  const [product, setProducts] = useState([]);

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
      <div className="container">
        <h1 className="primary-header h1">Products</h1>

        <div className="grid-4">
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
      </div>
      <Footer />
    </>
  );
}

export default Products;
