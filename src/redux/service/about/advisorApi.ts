/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const aboutAdvisorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdvisor: builder.mutation({
      query: (data) => ({
        url: "/advichor",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    getAllAdvisors: builder.query({
      query: () => ({
        url: "/advichor",
        method: "GET",
      }),
      providesTags: ["roofing"],
    }),
    deleteAdvisor: builder.mutation({
      query: (id) => ({
        url: `/advichor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["roofing"],
    }),
    updateAdvisor: builder.mutation({
      query: ({ data, id }) => ({
        url: `/advichor/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
  }),
});

export const {
  useCreateAdvisorMutation,
  useGetAllAdvisorsQuery,
  useDeleteAdvisorMutation,
  useUpdateAdvisorMutation,
} = aboutAdvisorApi;
export const { endpoints: authEndpoints } = aboutAdvisorApi;
