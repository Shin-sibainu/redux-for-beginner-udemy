import { configureStore } from "@reduxjs/toolkit";
// import "./features/cart/CartSlice";
import cartReducer from "./features/cart/CartSlice";
import modalReducer from "./features/modal/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
