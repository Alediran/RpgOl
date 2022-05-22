import { api } from "Services";
import { BoardCategoryDto, CreateBoardCategoryDto } from "Types/BoardCategories";

export const boardCategoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAll: build.query<Array<BoardCategoryDto>, void>({
      query: () => 'board-categories/all',
      providesTags: ['board-categories']
    }),

    //Mutations 
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