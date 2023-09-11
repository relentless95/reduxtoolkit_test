import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
// import modalReducer from "./features/modal/modalSlice";
// cart reducer is actually this: export default cartSlice.reducer; that we exported

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // modal: modalReducer,
  },
});
