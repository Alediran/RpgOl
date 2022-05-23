import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SessionTokenDto } from 'Types/Authentication';

const baseUrl = process.env.REACT_APP_API_URL;

const api = createApi({
	reducerPath: 'api',
	tagTypes: ['board', 'board-categories', 'session', 'user'],
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers) => {
			const tokenString = localStorage.getItem('token-oidc');
			
			if (tokenString) {
				const sessionToken: SessionTokenDto = JSON.parse(tokenString);				
				headers.set('authorization', `${sessionToken?.token_type} ${sessionToken?.access_token}`);
			}

			return headers;
		},
	}),
});

export default api;