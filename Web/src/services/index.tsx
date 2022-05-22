import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'App/Store';

const baseUrl = process.env.REACT_APP_API_URL;

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['board', 'board-categories', 'session', 'user'],
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
