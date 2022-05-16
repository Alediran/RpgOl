import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'App/Store';

const baseUrl = 'https://localhost:44360/api/';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['board', 'session', 'user'],
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers, { getState }) => {
			const sessionToken = (getState() as RootState).session.token
			
			if (sessionToken) headers.set('authorization', `${sessionToken?.token_type} ${sessionToken?.access_token}`);

			return headers;
		},
	}),
});
