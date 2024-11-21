import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// selectors
export const selectIsAuthenticated = (state: RootState) => state.auth
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;