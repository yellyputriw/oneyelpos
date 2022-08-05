import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
