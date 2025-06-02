/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRoofingPrice: builder.mutation({
      query: (data) => ({
        url: "/price",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["roofing"],
    }),
    getRoofingPrice: builder.query({
      query: () => ({
        url: "/price",
        method: "GET",
      }),
      providesTags: ["roofing"],
    }),
    getSelectedRoofingPrice: builder.query({
      query: (params: {
        roof: string;
        walkability: string;
        homeSize: string;
      }) => ({
        url: "/price/combination",
        method: "GET",
        params: params,
      }),

      providesTags: ["roofing"],
    }),
  }),
});

export const { useCreateRoofingPriceMutation, useGetRoofingPriceQuery, useGetSelectedRoofingPriceQuery } =
  authApi;
export const { endpoints: authEndpoints } = authApi;
