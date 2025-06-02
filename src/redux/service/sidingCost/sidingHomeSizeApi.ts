/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRoofingsidinghomesize: builder.mutation({
      query: (data) => ({
        url: "/sidinghomesize",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    getRoofingsidinghomesize: builder.query({
      query: () => ({
        url: "/sidinghomesize",
        method: "GET",
      }),
      providesTags: ["roofing"],
    }),
    updateRoofingsidinghomesize: builder.mutation({
      query: ({ data, id }) => ({
        url: `/sidinghomesize/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    deleteRoofingsidinghomesize: builder.mutation({
      query: (id) => ({
        url: `/sidinghomesize/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["roofing"],
    }),
  }),
});

export const {
  useCreateRoofingsidinghomesizeMutation,
  useGetRoofingsidinghomesizeQuery,
  useUpdateRoofingsidinghomesizeMutation,
  useDeleteRoofingsidinghomesizeMutation,
} = authApi;
export const { endpoints: authEndpoints } = authApi;
