import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/slice";
import cartReducer from "./cart/slice";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
