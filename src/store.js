import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import signInReducer from "./redux/features/signIn/signInSlice";
import signUpReducer from "./redux/features/signUp/signUpSlice";
import authReducer from "./redux/features/auth/authSlice";
import resumeReducer from "./redux/features/resume/resumeSlice";
import userReducer from "./redux/features/user/userSlice";
import quizReducer from "./redux/features/quiz/quizSlice";
import { authApi } from "./services/authApi";
import { resumeApi } from "./services/resumeApi";
import { userApi } from "./services/userApi";
import { candidatsApi } from "./services/candidatsApi";
import { quizApi } from "./services/quizApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [resumeApi.reducerPath]: resumeApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [candidatsApi.reducerPath]: candidatsApi.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
    signIn: signInReducer,
    signUp: signUpReducer,
    auth: authReducer,
    resume: resumeReducer,
    user: userReducer,
    quiz: quizReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat(authApi.middleware)
      .concat(resumeApi.middleware)
      .concat(userApi.middleware)
      .concat(candidatsApi.middleware)
      .concat(quizApi.middleware),
});

setupListeners(store.dispatch);
