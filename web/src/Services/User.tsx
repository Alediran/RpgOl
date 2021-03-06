import  api from "Services";
import { UserDetailsDto } from "Types/Authentication";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserDetails: build.query<UserDetailsDto, string>({
      query: (userId) => `identity/users/${userId}`,
      providesTags: ['user']
    })
  }),  
})

export const { useLazyGetUserDetailsQuery } = userApi