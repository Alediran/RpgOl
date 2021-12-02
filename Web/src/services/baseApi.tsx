import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';

const baseUrl = 'https://localhost:5001/api/';

export const baseApi = createApi({
	reducerPath: 'baseApi',
	tagTypes: ['board', 'session', 'user'],
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers, { getState }) => {
			return headers;
		},
	}),
});
