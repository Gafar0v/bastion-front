import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://94.241.140.221:8080/api/v1/"
  }),
  endpoints: (builder) => ({
    getQuiz: builder.query({
      query: (id) => ({
        url: `quiz/${id}`
      })
    })
  })
})

export const { useGetQuizQuery } = quizApi;