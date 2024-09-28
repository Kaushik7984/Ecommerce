import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Using regular redux-thunk
import { composeWithDevTools } from "redux-devtools-extension";

// Placeholder reducer (you can replace this with your actual reducers)
const placeholderReducer = (state = {}, action) => {
  return state;
};

// Combine all reducers (currently just the placeholder)
const reducer = combineReducers({
  placeholder: placeholderReducer,
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
