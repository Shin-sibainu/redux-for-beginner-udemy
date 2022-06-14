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
  //買い物かごの中身を消すとき等に実装
  reducers: {
    clearCart: (state) => {
      // state.cartItems = [];
      return { cartItems: [] };
    },
    removeItem: (state, action) => {
      console.log(action);
      //payloadにはremoveItem()の引数に入れた情報が入ることになる。
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      //新しい状態に更新
      state.amount = amount;
      state.total = total;
    },
  },
});

//Sliceの中身を確認してみよう
// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
