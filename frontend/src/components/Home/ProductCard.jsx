import React from 'react';
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link className='productCard' to={`/product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div>
          <Rating
            name="read-only"
            value={product.ratings}
            precision={0.5}
            readOnly
            size={'small'}
            // style={{ color: "tomato" }}
          />
          <span>({product.numOfReviews} Reviews)</span>
        </div>
        <span>{`₹ ${product.price}`}</span>
      </Link>
    </div>
  );
};

export default ProductCard;
