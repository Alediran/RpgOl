import api  from "Services";
import { BoardCategoryDto, BoardCategoryInput, CreateBoardCategoryDto } from "Types/BoardCategories";
import PagedResultDto from "Types/PagedResultDto";

export const boardCategoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAll: build.query<Array<BoardCategoryDto>, void>({
      query: () => 'board-categories/all',
      providesTags: ['board-categories']
    }),
    getPagedSorted: build.query<PagedResultDto<BoardCategoryDto>, BoardCategoryInput>({
      query: (input) => {
        let query = '';

        if (input.filterText) query += `FilterText=${input.filterText}`;

        if (input.sortField) query += query.length > 0 ? `&Sorting=${input.sortField} ${input.sortOrder === 1 ? 'ASC' : 'DESC'}` : 
          `Sorting=${input.sortField} ${input.sortOrder === 1 ? 'ASC' : 'DESC'}`;

        if (input.skipCount) query += query.length > 0 ? `&SkipCount=${input.skipCount}` : `SkipCount=${input.skipCount}`;

        if (input.maxResultCount) query += query.length > 0 ? `&MaxResultCount=${input.maxResultCount}` : `MaxResultCount=${input.maxResultCount}`;
        
        return `board-categories?${query}`
      }
    }),
    // Mutations 
    create: build.mutation<BoardCategoryDto, CreateBoardCategoryDto>({
      query: (payload) => ({
        url: 'board-categories',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['board-categories']
    }),

    delete: build.mutation<void, string>({
      query: (id) => ({
        url: `board-categories/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['board-categories']
    })
  })
})

export const { useGetAllQuery, useGetPagedSortedQuery, useCreateMutation, useDeleteMutation } = boardCategoriesApi;