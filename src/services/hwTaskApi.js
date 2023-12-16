import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hwTaskApi = createApi({
  reducerPath: "hwTaskApi",
  tagTypes: ["GetTasks", "PostTasks"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://94.241.140.221:8080/api/v1",
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("token")).token;
      console.log(token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getAllHwTasks: builder.query({
      query: () => "hw",
      providesTags: ["GetTasks"]
    }),

    sendHwTask: builder.mutation({
      query: (body) => ({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/pdf',
        },
        url: `hw/load`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["PostTasks"]
    })
  })
})

export const { useGetAllHwTasksQuery, useSendHwTaskMutation } = hwTaskApi;