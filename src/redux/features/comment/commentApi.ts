/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";


const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllComments: builder.query({
      query: (data) => ({
        url: `/comment/${data?.id}?page=${data?.page}&limit=${data?.limit}`,
        method: "GET",
      }),
      providesTags: ["comment"],
    }),
    createComment: builder.mutation({
        query: (body) => {
          return {
            url: `/comment/create`,
            method: "POST",
            body: body,
          };
        },
        invalidatesTags: ["comment"],
      }),
  }),
});

export const {
  useGetAllCommentsQuery,
useCreateCommentMutation,
} = commentApi;
