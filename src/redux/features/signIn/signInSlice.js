import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    inputEmail: (state, action) => {
      state.email = action.payload;
    },

    inputPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { inputEmail, inputPassword } = signInSlice.actions;
export default signInSlice.reducer;
