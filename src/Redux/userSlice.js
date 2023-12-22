import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = "Login failed. Please try again.";
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    }
  }
});

export const { loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
