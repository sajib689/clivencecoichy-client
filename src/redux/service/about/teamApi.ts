/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const aboutTeamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTeam: builder.mutation({
      query: (data) => ({
        url: "/employee",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    getAllTeams: builder.query({
      query: () => ({
        url: "/employee",
        method: "GET",
      }),
      providesTags: ["roofing"],
    }),
    deleteTeam: builder.mutation({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["roofing"],
    }),
    updateTeam: builder.mutation({
      query: ({ data, id }) => ({
        url: `/employee/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
  }),
});

export const {
  useCreateTeamMutation,
  useGetAllTeamsQuery,
  useDeleteTeamMutation,
  useUpdateTeamMutation,
} = aboutTeamApi;
export const { endpoints: authEndpoints } = aboutTeamApi;
