import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Using regular redux-thunk
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer, productDetailsReducer, newReviewReducer } from "./reducers/productReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder :newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
});

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
const middleware = [thunk];

// Create store with middleware and devtools
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
