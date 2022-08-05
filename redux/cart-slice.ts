import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICartSlice {
  items: [];
  totalQuantity: number;
}

const initialState: ICartSlice = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state: any, action: PayloadAction<number>) {
      state.items = action.payload;
      state.totalQuantity = action.payload;
    },
    addToCart(state: any, action: PayloadAction<any>) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          quantity: 1,
          totalPrice: newItem.price,
          img: newItem.img,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeFromCart(state: any, action: PayloadAction<any>) {
      const id = action.payload;
      const existingItem = state.items.find((item: any) => item.id === id);
      state.totalQuantity--;
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item: any) => item.id !== id);
      } else {
        existingItem.totalQuantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
