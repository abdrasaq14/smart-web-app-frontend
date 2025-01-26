import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IUser } from "../utils/interfaces";

interface IAuthState {
  isAuthenticated: boolean;
  user: IUser | null;
}
const initialState: IAuthState = {
  isAuthenticated: false,
  user: null,
};

const userDetail = createAsyncThunk("auth/userDetail", async () => {});

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
export const selectAuthSlice = (state: RootState) => state.auth;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
