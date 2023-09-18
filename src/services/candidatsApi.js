import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const candidatsApi = createApi({
  reducerPath: "candidatsApi",
  tagTypes: ["Candidat"],
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
    getAllCandidats: builder.query({
      query: () => "form"
    }),
  }),
})

export const { useGetAllCandidatsQuery } = candidatsApi;