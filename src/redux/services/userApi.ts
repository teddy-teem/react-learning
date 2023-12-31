import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { variables } from "@/configs/variables";

type User = {
  id: number;
  name: string;
  email: number;
};

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: variables.baseUrl,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => "/users",
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `/users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
