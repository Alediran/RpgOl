import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://localhost:44360/api/';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['board', 'session', 'user'],
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers, { getState }) => {
			return headers;
		},
	}),
});
