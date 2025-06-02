/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRoofingSidingPrice: builder.mutation({
      query: (data) => ({
        url: "/SidingPrice",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    getRoofingSidingPrice: builder.query({
      query: () => ({
        url: "/SidingPrice",
        method: "GET",
      }),
      providesTags: ["roofing"],
    }),
    getSelectedRoofingSidingPrice: builder.query({
      query: (params: {
        roof: string;
        stories: string;
        homeSize: string;
      }) => ({
        url: "/sidingprice/combination",
        method: "GET",
        params: params,
      }),

      providesTags: ["roofing"],
    }),
  }),
});

export const {
  useCreateRoofingSidingPriceMutation,
  useGetRoofingSidingPriceQuery,
  useGetSelectedRoofingSidingPriceQuery,
} = authApi;
export const { endpoints: authEndpoints } = authApi;
