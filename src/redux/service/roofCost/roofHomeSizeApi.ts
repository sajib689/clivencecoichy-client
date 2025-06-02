/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRoofingHomeSize: builder.mutation({
      query: (data) => ({
        url: "/homesize",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    getRoofingHomeSize: builder.query({
      query: () => ({
        url: "/homesize",
        method: "GET",
      }),
      providesTags: ["roofing"],
    }),
    updateRoofingHomeSize: builder.mutation({
      query: ({ data, id }) => ({
        url: `/homesize/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    deleteRoofingHomeSize: builder.mutation({
      query: (id) => ({
        url: `/homesize/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["roofing"],
    }),
  }),
});

export const {
  useCreateRoofingHomeSizeMutation,
  useGetRoofingHomeSizeQuery,
  useUpdateRoofingHomeSizeMutation,
  useDeleteRoofingHomeSizeMutation,
} = authApi;
export const { endpoints: authEndpoints } = authApi;
