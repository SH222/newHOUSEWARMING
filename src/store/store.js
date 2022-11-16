import { configureStore } from "@reduxjs/toolkit";
import cartList from "./cartList.js";

export default configureStore({
  reducer: {
    cartList: cartList.reducer,
  },
});
