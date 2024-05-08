import { useNavigate } from "react-router-dom";
// import Button from "../../UI/Button";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const { image, _id: productId, title, titleBreak } = product;

  return (
    <>
      <div
        className="grid-2-cols"
        onClick={() => navigate(`/productPage/${productId}`)}>
        <img src={image} alt={title} className="grid-4-image" />
        <p className="text-description product-text desc">
          {title} {titleBreak}
        </p>
      </div>
    </>
  );
};

export default ProductDetails;
