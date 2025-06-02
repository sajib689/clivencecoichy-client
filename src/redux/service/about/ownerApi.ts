/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const aboutOwnerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOwner: builder.mutation({
      query: (data) => ({
        url: "/about",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    getAllOwners: builder.query({
      query: () => ({
        url: "/about",
        method: "GET",
      }),
      providesTags: ["roofing"],
    }),
    deleteOwner: builder.mutation({
      query: (id) => ({
        url: `/about/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["roofing"],
    }),
    updateOwner: builder.mutation({
      query: ({ data, id }) => ({
        url: `/about/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
  }),
});

export const {
  useCreateOwnerMutation,
  useGetAllOwnersQuery,
  useDeleteOwnerMutation,
  useUpdateOwnerMutation,
} = aboutOwnerApi;
export const { endpoints: authEndpoints } = aboutOwnerApi;
