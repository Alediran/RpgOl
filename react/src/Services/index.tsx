import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'App/Store';
import FilteredPagedAndSortedRequestDto from 'Types/Output/FilteredPagedAndSortedRequestDto';

const baseUrl = import.meta.env.VITE_API_URL + '/api/';

const api = createApi({
	reducerPath: 'api',
	tagTypes: ['board', 'board-categories', 'board-categories-all', 'session', 'user', 'boards', 'threads'],
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: async (headers, {getState}) => {

			const tokenString = (getState() as RootState).session;
			
			if (tokenString) {				
				headers.set('authorization', `${tokenString?.token_type} ${tokenString.access_token}`);
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