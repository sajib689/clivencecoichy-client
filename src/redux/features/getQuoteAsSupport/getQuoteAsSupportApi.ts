/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";


const getQuoteAsSupportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllPoints: builder.query({
    //   query: () => ({
    //     url: "/point",
    //     method: "GET",
    //   }),
    //   providesTags: ["point"],
    // }),
    requestQuoteOrSupport: builder.mutation({
        query: (body) => {
          return {
            url: `/support/support-request`,
            method: "POST",
            body: body,
          };
        },
        invalidatesTags: ["quote"],
      }),
  }),
});

export const {
useRequestQuoteOrSupportMutation
} = getQuoteAsSupportApi;
