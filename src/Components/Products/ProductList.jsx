import { useNavigate } from "react-router-dom";
// import Button from "../../UI/Button";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const { image, _id: productId, title, titleBreak } = product;

  return (
    <>
      <div className="container blogs">
        <div
          className="grid-3-cols"
          onClick={() => navigate(`/productPage/${productId}`)}>
          <img src={image} alt={title} className="grid-3-img" />
          <div className="pub">
            <p className="text-description product-text desc">
              {title} {titleBreak}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
