import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null ,
  firstname: null,
  lastname: null,
  role: null,
  userStatus: null,
  activity: null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          userStatus: action.payload.userStatus,
          activity: action.payload.activity
        })
      )

      localStorage.setItem(
        "fullName",
        JSON.stringify({
          name: action.payload.firstname,
          surname: action.payload.lastname,
        })
      )

      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.role = action.payload.role;
      state.userStatus = action.payload.userStatus;
      state.activity = action.payload.activity;
    },
    logoutUser: () => initialState
  }
})

export const { setLoginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;