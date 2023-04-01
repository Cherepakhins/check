import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IOrder} from "../models/IOrder";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3003"
  }),
  endpoints: (build) => ({
    fetchAllOrders: build.query<IOrder[], number>({
      query: (limit: number = 5) => ({
        url: `/orders`,
        params: {
          _limit: limit
        }
      })
    }),
    createOrder: build.mutation<IOrder, IOrder>({
      query: (order) => ({
        url: `/orders`,
        method: "POST",
        body: order
      })
    })
  })
});
