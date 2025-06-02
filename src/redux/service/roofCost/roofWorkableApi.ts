/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRoofingWorkable: builder.mutation({
      query: (data) => ({
        url: "/walkable",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    getRoofingWorkable: builder.query({
      query: () => ({
        url: "/walkable",
        method: "GET",
      }),
      providesTags: ["roofing"],
    }),
    updateRoofingWorkable: builder.mutation({
      query: ({ data, id }) => ({
        url: `/walkable/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    deleteRoofingWorkable: builder.mutation({
      query: (id) => ({
        url: `/walkable/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["roofing"],
    }),
  }),
});

export const {
  useCreateRoofingWorkableMutation,
  useGetRoofingWorkableQuery,
  useUpdateRoofingWorkableMutation,
  useDeleteRoofingWorkableMutation,
} = authApi;
export const { endpoints: authEndpoints } = authApi;
