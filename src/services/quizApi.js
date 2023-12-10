import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  tagTypes: ["GetQuiz", "PostQuiz"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://94.241.140.221:8080/api/v1/",
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("token")).token;
      console.log(token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getQuiz: builder.query({
      query: (id) => ({
        url: `quiz/${id}`
      }),
      providesTags: ["Quiz"],
    }),

    sendQuiz: builder.mutation({
      query: (body, id) => ({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        url: `quiz/1`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["PostQuiz"]
    })
  })
})

export const { useGetQuizQuery, useSendQuizMutation } = quizApi;