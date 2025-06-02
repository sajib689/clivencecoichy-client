/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const roofApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSidingRoofingRoof: builder.mutation({
      query: (data) => ({
        url: "/sidingroof",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    getSidingRoofingRoof: builder.query({
      query: () => ({
        url: "/sidingroof",
        method: "GET",
      }),
      providesTags: ["roofing"],
    }),
    updateSidingRoofingRoof: builder.mutation({
      query: ({ data, id }) => ({
        url: `/sidingroof/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    deleteSidingRoofingRoof: builder.mutation({
      query: (id) => ({
        url: `/sidingroof/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["roofing"],
    }),
  }),
});

export const {
    useCreateSidingRoofingRoofMutation,
    useGetSidingRoofingRoofQuery,
    useUpdateSidingRoofingRoofMutation,
    useDeleteSidingRoofingRoofMutation,
} = roofApi;
export const { endpoints: authEndpoints } = roofApi;
