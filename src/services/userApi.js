import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setLoginUser } from "../redux/features/user/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
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
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query() {
        return {
          url: "form/personal",
        };
      },
      transformResponse: (result) => result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setLoginUser(data));
        } catch (error) {}
      }
    })
  })
});