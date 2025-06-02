/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSidingWorkable: builder.mutation({
      query: (data) => ({
        url: "/sidingstore",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    getSidingWorkable: builder.query({
      query: () => ({
        url: "/sidingstore",
        method: "GET",
      }),
      providesTags: ["roofing"],
    }),
    updateSidingWorkable: builder.mutation({
      query: ({ data, id }) => ({
        url: `/sidingstore/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    deleteSidingWorkable: builder.mutation({
      query: (id) => ({
        url: `/sidingstore/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["roofing"],
    }),
  }),
});

export const {
  useCreateSidingWorkableMutation,
  useGetSidingWorkableQuery,
  useUpdateSidingWorkableMutation,
  useDeleteSidingWorkableMutation,
} = authApi;
export const { endpoints: authEndpoints } = authApi;
