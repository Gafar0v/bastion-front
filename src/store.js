import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import signInReducer from "./redux/features/signIn/signInSlice";
import signUpReducer from "./redux/features/signUp/signUpSlice";
import authReducer from "./redux/features/auth/authSlice"
import { authApi } from "./services/authApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    signIn: signInReducer,
    signUp: signUpReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});


setupListeners(store.dispatch);
