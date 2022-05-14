import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthenticationDto } from 'Types/Authentication';

const baseUrl = 'https://localhost:44384/';

const api = createApi({
	reducerPath: 'authenticate',
	tagTypes: ['session'],
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers, { getState }) => {
			return headers;
		},
	}),
});


export const Authenticate = api.injectEndpoints({
  endpoints: (build) => ({
    authenticate: build.mutation<string, AuthenticationDto>({
      query: (authentication) => ({
        url: `connect/authorize`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: authentication
      })
    })
  })
})

export const {
  useAuthenticateMutation
} = Authenticate