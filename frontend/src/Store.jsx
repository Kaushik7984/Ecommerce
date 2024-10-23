import { configureStore } from "@reduxjs/toolkit"; // Redux Toolkit's store setup
import { 
  productDetailsReducer, 
  newReviewReducer, 
  productsReducer, 
  newProductReducer, 
  productReducer, 
  productReviewsReducer, 
  reviewReducer 
} from "./reducers/productReducer";
import { 
  allUsersReducer, 
  forgotPasswordReducer, 
  profileReducer, 
  userDetailsReducer, 
  userReducer 
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { 
  allOrdersReducer, 
  myOrdersReducer, 
  newOrderReducer, 
  orderDetailsReducer, 
  orderReducer 
} from "./reducers/orderReducer";

// Combine all reducers
const reducer = {
  products: productsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  newProduct: newProductReducer,
  product: productReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
};

// Set initial state for cart
const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  }
};

const store = configureStore({
  reducer,
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
});

export default store;
