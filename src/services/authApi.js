import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";
import { resumeApi } from "./resumeApi";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["Login", "Register"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://94.241.140.221:8080/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body, token) => {
        return {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          url: "auth/register",
          method: "POST",
          body,
        }
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null))
        } catch {}
      },
      invalidatesTags: ["Register"],
    }),

    loginUser: builder.mutation({
      query: (body) => ({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        url: "auth/authenticate",
        method: "POST",
        body,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
      invalidatesTags: ["Login"],
    })
  }),
});


export const { useRegisterUserMutation, useLoginUserMutation, } = authApi;
