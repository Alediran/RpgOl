import api  from "Services";
import { BoardCategoryDto, BoardCategoryInput, CreateBoardCategoryDto } from "Types/BoardCategories";
import PagedResultDto from "Types/PagedResultDto";

export const boardCategoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAll: build.query<Array<BoardCategoryDto>, void>({
      query: () => 'board-categories/all',
      providesTags: ['board-categories-all']
    }),
    getPagedSorted: build.query<PagedResultDto<BoardCategoryDto>, BoardCategoryInput>({
      query: (input) => {
        let query = '';

        query += `SkipCount=${input.skipCount}`;

        query += `&MaxResultCount=${input.maxResultCount}`;

        if (input.filterText) query += `&FilterText=${input.filterText}`;

        if (input.sortField) query += `&Sorting=${input.sortField} ${input.sortOrder === 1 ? 'ASC' : 'DESC'}`;        
        
        return `board-categories?${query}`
      },
      providesTags: ['board-categories']
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