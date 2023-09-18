import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setField } from "../redux/features/resume/resumeSlice";

export const resumeApi = createApi({
  reducerPath: "resumeApi",
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
  tagTypes: ["GET", "UPDATE", "SEND"],
  endpoints: (builder) => ({
    getResume: builder.query({
      query: () => "resume",
      providesTags: ["GET"],
      transformResponse: (result) => result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setField({
            phone_number: data.phone_number,
            military_duty: data.military_duty,
            metro_station: data.metro_station,
            good_qualities: data.good_qualities,
            bad_qualities: data.bad_qualities,
            bad_habits: data.bad_habits,
            reasons_for_working: data.reasons_for_working,
            good_job_qualities: data.good_job_qualities,
            resume_src: data.resume_src,
            education: data.education,
            busyness: data.busyness
          }))
        } catch (error) {}
      }
    }),

    updateResume: builder.mutation({
      query: (body) => ({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        url: "resume",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["UPDATE"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(resumeApi.endpoints.getResume.initiate(null))
        } catch (error) {}
      }
    }),

    sendResume: builder.mutation({
      query: (body) => ({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        url: "resume",
        method: "POST",
        body,
      }),
      invalidatesTags: ["SEND"]
    })
  })
})

export const { useGetResumeQuery ,useUpdateResumeMutation, useSendResumeMutation } = resumeApi;