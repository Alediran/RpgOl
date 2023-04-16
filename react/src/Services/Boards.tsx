import  api, { generateFilteredPagedAndSortedQuery } from "Services";
import PagedResultDto from "Types/Base/PagedResultDto";
import { BoardDto, CreateBoardDto, GroupedBoardsDto, UpdateBoardDto } from "Types/Board";
import FilteredPagedAndSortedRequestDto from "Types/Output/FilteredPagedAndSortedRequestDto";

export const boardsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBoardById: build.query<BoardDto, string | undefined>({
      query: (id) => `boards/${id}`,
    }),
    getAllBoards: build.query<GroupedBoardsDto, void>({
      query: () => 'boards/all',
      providesTags: ['boards']
    }),
    getAllBoardsPaged: build.query<PagedResultDto<BoardDto>, FilteredPagedAndSortedRequestDto>({
      query: (input) => `boards?${generateFilteredPagedAndSortedQuery(input)}`,
      providesTags: ['boards']
    }),

    // Mutations 
    createBoard: build.mutation<BoardDto, CreateBoardDto>({
      query: (payload) => ({
        url: 'boards',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['boards']
    }),
    updateBoard: build.mutation<BoardDto, UpdateBoardDto>({
      query: (payload) => ({
        url: 'boards',
        method: 'PATCH',
        body: payload
      })
    }),
    deleteBoard: build.mutation<void, string>({
      query: (id) => ({
        url: `boards/${id}`,
        method: 'DELETE',

      })
    })
  })
})

export const { 
  useGetBoardByIdQuery,
  useGetAllBoardsQuery,
  useCreateBoardMutation
} = boardsApi