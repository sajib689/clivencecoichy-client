/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";


const serviceAreaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServiceAreas: builder.query({
      query: () => ({
        url: "/service-area",
        method: "GET",
      }),
      providesTags: ["serviceArea"],
    }),
    // subscribeToNewsLetter: builder.mutation({
    //     query: (body) => {
    //       return {
    //         url: `/subScriptions/add-mail`,
    //         method: "POST",
    //         body: body,
    //       };
    //     },
    //     invalidatesTags: ["newsLetter"],
    //   }),
  }),
});

export const {
useGetAllServiceAreasQuery
} = serviceAreaApi;
