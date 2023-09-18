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

    setFullName: (state, action) => {
      localStorage.setItem(
        "fullName",
        JSON.stringify({
          name: action.payload.name,
          surname: action.payload.surname,
        }),
      )

      state.name = action.payload.name;
      state.surname = action.payload.surname;
    }

  },
});

export const {
  changeName,
  changeSurname,
  changeEmail,
  changePassword,
  changeVerifyPassword,
  checkMatchPasswords,
  setFullName
} = signUpSlice.actions;

export default signUpSlice.reducer;
