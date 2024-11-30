/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";


const newsLetterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllPoints: builder.query({
    //   query: () => ({
    //     url: "/point",
    //     method: "GET",
    //   }),
    //   providesTags: ["point"],
    // }),
    subscribeToNewsLetter: builder.mutation({
        query: (body) => {
          return {
            url: `/subScriptions/add-mail`,
            method: "POST",
            body: body,
          };
        },
        invalidatesTags: ["newsLetter"],
      }),
  }),
});

export const {
useSubscribeToNewsLetterMutation
} = newsLetterApi;
