import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlicer";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import loadingReducer from "./loadingSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    auth: authReducer, // Add the authReducer
    loadingReducer: loadingReducer
  }
});
