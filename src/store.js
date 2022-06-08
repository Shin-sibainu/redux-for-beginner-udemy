import { configureStore } from "@reduxjs/toolkit";
// import "./features/cart/CartSlice";
import cartReducer from "./features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
