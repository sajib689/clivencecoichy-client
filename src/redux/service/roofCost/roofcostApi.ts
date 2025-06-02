/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRoofingRoof: builder.mutation({
      query: (data) => ({
        url: "/roof",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    getRoofingRoof: builder.query({
      query: () => ({
        url: "/roof",
        method: "GET",
      }),
      providesTags: ["roofing"],
    }),
    updateRoofingRoof: builder.mutation({
      query: ({ data, id }) => ({
        url: `/roof/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    deleteRoofingRoof: builder.mutation({
      query: (id) => ({
        url: `/roof/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["roofing"],
    }),
  }),
});

export const {
  useCreateRoofingRoofMutation,
  useGetRoofingRoofQuery,
  useUpdateRoofingRoofMutation,
  useDeleteRoofingRoofMutation,
} = authApi;
export const { endpoints: authEndpoints } = authApi;
