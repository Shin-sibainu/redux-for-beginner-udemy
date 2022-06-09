import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

//買い物かごの初期化
const initialState = {
  // cartItems: [],
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  //買い物かごの中身を消すときに実装
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

//Sliceの中身を確認してみよう
console.log(cartSlice);

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
