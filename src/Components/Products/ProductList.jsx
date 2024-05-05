import { useNavigate } from "react-router-dom";
// import Button from "../../UI/Button";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const { image, _id: productId, title } = product;

  return (
    <>
      <div
        className="grid-4-cols pointer"
        onClick={() => navigate(`/productPage/${productId}`)}>
        <div>
          <img
            // src={`${image}`}
            src={image}
            alt={title}
            className="grid-4-image"
          />
          <div className="cart-detail-btn"></div>
          <div className="text-align">
            <p className="text-description product-text desc">{title}</p>

            {/* <p className="text-description product-text desc">${price}.00 USD</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
