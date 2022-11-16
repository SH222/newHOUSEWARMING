import { createSlice } from "@reduxjs/toolkit";

let cartList = createSlice({
  name: "cartList",
  initialState: [
    { id: 1, img: "./items/1.jpg", title: "바이엔 전동 리클라이너 소파", option: "", price: 589000, count: 1 },
    { id: 2, img: "./items/2.jpg", title: "타블도트 모던 2인 식기 그릇세트", option: "", price: 33500, count: 2 },
  ],
  reducers: {
    addCount(state, action) {
      let itemId = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[itemId].count++;
    },
    subCount(state, action) {
      let itemId = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[itemId].count--;
    },
    addItem(state, action) {
      let itemIndex = state.findIndex((a) => a.id === action.payload.id);
      if (itemIndex > -1) {
        state[itemIndex].count++;
      } else {
        state.push(action.payload);
      }
    },
    deleteItem(state, action) {
      let filtered = state.filter((a) => a.id !== action.payload);
      return filtered;
    },
  },
});

export let { addItem, addCount, subCount, deleteItem } = cartList.actions;

export default cartList;
