import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails, clearErrors } from "../../actions/productAction";
import ReviewCard from "./ReviewCard.jsx";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData.jsx";
import ToastContainer from "../Home/ToastContainer.jsx";
import toast from "react-hot-toast";
import { Rating } from "@material-ui/lab";
import { useParams } from "react-router-dom";  
import { addItemsToCart } from "../../actions/cartAction.js"; 

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();   

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const [quantity, setQuantity] = useState(1);
  const [showAllReviews, setShowAllReviews] = useState(false); // Added state to manage review visibility

  const increaseQuantity = () => {
    if (product.stock <= quantity) return;
    setQuantity((prevQty) => prevQty + 1);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    setQuantity((prevQty) => prevQty - 1);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    toast.success("Item Added To Cart");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id)); 
  }, [dispatch, id, error]);

  const toggleReviews = () => {
    setShowAllReviews(!showAllReviews); // Toggle the showAllReviews state
  };

  return (
    <Fragment>
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name}/Ecommerce`} />
          <div className="ProductDetails">
            <div>
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating
                  name="product-rating"
                  value={product ? product.ratings : 0}
                  readOnly
                  precision={0.5} 
                  style={{ color: "tomato" }}   
                />
                <span>({product.numOfReviews} Reviews)</span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
                <p>
                  Status:
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>
              <button className="submitReview">Submit Review</button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews.slice(0, showAllReviews ? product.reviews.length : 2).map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
              <span className="viewMore" onClick={toggleReviews}>
                {showAllReviews ? "View Less" : "View More"}
              </span>
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
