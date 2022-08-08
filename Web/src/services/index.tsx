import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SessionTokenDto } from 'Types/Authentication';
import FilteredPagedAndSortedRequestDto from 'Types/Output/FilteredPagedAndSortedRequestDto';

const baseUrl = process.env.REACT_APP_API_URL;

const api = createApi({
	reducerPath: 'api',
	tagTypes: ['board', 'board-categories', 'board-categories-all', 'session', 'user', 'boards'],
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

export const generateFilteredPagedAndSortedQuery = (input: FilteredPagedAndSortedRequestDto) => {
	let result = '';

	result += `SkipCount=${input.skipCount}`;

	result += `&MaxResultCount=${input.maxResultCount}`;

	if (input.filterText) result += `&FilterText=${input.filterText}`;

	if (input.sortField) result += `&Sorting=${input.sortField} ${input.sortOrder === 1 ? 'ASC' : 'DESC'}`;

	return result;
}

export default api;