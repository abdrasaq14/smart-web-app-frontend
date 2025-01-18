import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IAuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    email: string;
    role: string;
    access_level: string;
    first_name: string;
    last_name: string;
    company: string;
  } | null;
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
