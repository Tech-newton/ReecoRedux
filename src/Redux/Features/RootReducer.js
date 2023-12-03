import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./ProductOperation/ProductSlice";

const rootReducer = combineReducers({
    products: productReducer,
});
  
export default rootReducer;