import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { logoutUser } from "../user/userSlice";

const initialState = {
  token: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem(
        "token",
        JSON.stringify({
          token: action.payload.token,
        })
      );
      state.token = action.payload.token;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(logoutUser, () => {
      logoutUser();
      localStorage.clear();
      Cookies.remove("jwt-token");
    })
  }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;