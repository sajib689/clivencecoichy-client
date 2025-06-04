/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const aboutReviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (data) => ({
        url: "/reviews",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    getAllReviews: builder.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
      providesTags: ["roofing"],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["roofing"],
    }),
    updateReview: builder.mutation({
      query: ({ data, id }) => ({
        url: `/reviews/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewsQuery,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} = aboutReviewApi;
export const { endpoints: authEndpoints } = aboutReviewApi;
