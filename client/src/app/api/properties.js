import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import local from "./config";

export const properties = createApi({
  reducerPath: "properties",

  baseQuery: fetchBaseQuery({
    //baseUrl: "http://localhost:3001",
    baseUrl: `${local}`,
  }),

  endpoints: (builder) => ({
    getProperties: builder.query({
      query: (page = 0, size = 18) => `/property?page=${page}&size=${size}`,
    }),

    postProperties: builder.mutation({
      query: (newProperty) => {
        return {
          url: "property",
          method: "post",
          body: newProperty,
        };
      },
    }),

    getPropertyById: builder.query({
      query: (id) => `/property/${id}`,
    }),

    getPropertiesByCity: builder.query({
      query: (city) => `/property?city=${city}`,
    }),

    getType: builder.query({
      query: () => `/type`,
    }),

    getService: builder.query({
      query: () => `/servicio`,
    }),

    postUser: builder.mutation({
      query: (user) => {
        return {
          url: "/users",
          method: "post",
          body: user,
        };
      },
    }),

    getPropertiesByType: builder.query({
      query: (type) => `/property?type=${type}`,
    }),
  }),
});

export const {
  useGetPropertiesQuery,
  useGetPropertyByIdQuery,
  useGetPropertiesByCityQuery,
  useGetTypeQuery,
  useGetServiceQuery,
  usePostUserMutation,
  useGetPropertiesByTypeQuery
} = properties;
