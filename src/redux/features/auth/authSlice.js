import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: action.payload.token
        })
      );

      state.token = action.payload.token;
    }
  }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;