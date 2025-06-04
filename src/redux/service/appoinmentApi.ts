/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const appoinmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendApoinment: builder.mutation({
      query: (data) => ({
        url: "/appointment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
  }),
});

export const {
    useSendApoinmentMutation,
} = appoinmentApi;
export const { endpoints: authEndpoints } = appoinmentApi;
