import  api from "Services";
import { BoardDto } from "Types/Board";

export const boardsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBoards: build.query<Array<BoardDto>, string>({
      query: (input) => ``,
    })
  })
})

export const { useGetBoardsQuery} = boardsApi