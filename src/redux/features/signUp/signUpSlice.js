import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  email: "",
  password: "",
  verifyPassword: "",
  isMatchPasswords: true,
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },

    changeSurname: (state, action) => {
      state.surname = action.payload;
    },

    changeEmail: (state, action) => {
      state.email = action.payload;
    },

    changePassword: (state, action) => {
      state.password = action.payload;
    },

    changeVerifyPassword: (state, action) => {
      state.verifyPassword = action.payload;
    },

    checkMatchPasswords: (state) => {
      state.isMatchPasswords = state.password === state.verifyPassword;
    },

  },
});

export const {
  changeName,
  changeSurname,
  changeEmail,
  changePassword,
  changeVerifyPassword,
  checkMatchPasswords,
} = signUpSlice.actions;

export default signUpSlice.reducer;
