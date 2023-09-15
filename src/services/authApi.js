import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["Login", "Register"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://94.241.140.221:8080/api/v1/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body ) => ({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        url: "auth/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Register"]
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
      invalidatesTags: ["Login"],
    })
  }),
});


export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
