import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Using regular redux-thunk
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer,productDetailsReducer } from "./reducers/productReducer";

const reducer = combineReducers({
 products:productReducer,
 productDetails:productDetailsReducer
});

const initialState = {};
const middleware = [thunk];

// Create store with middleware and devtools
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
