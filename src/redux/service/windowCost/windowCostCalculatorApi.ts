/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createWindowCalculation: builder.mutation({
      query: (data) => ({
        url: "/windowscost",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["window"],
    }),
    getWindowCalculation: builder.query({
      query: () => ({
        url: "/windowscost",
        method: "GET",
      }),
      providesTags: ["window"],
    }),
    updateWindowCalculation: builder.mutation({
      query: ({ data, id }) => ({
        url: `/sidinghomesize/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["window"],
    }),
    deleteWindowCost: builder.mutation({
      query: (id) => ({
        url: `/windowscost/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["window"],
    }),
    pricingWindowCost: builder.mutation({
      query: (data) => ({
        url: `/windowscost/estimate`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["window"],
    }),
  }),
});

export const {
  useCreateWindowCalculationMutation,
  useDeleteWindowCostMutation,
  useGetWindowCalculationQuery,
  usePricingWindowCostMutation,
  useUpdateWindowCalculationMutation,
} = authApi;
export const { endpoints: authEndpoints } = authApi;
