import { baseApi } from './baseApi';
import BoardDto from '../model/board/board.dto';
import BoardCreateNewGameDto from '../model/board/board-create.dto';

export const boardApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getBoards: build.query<BoardDto[], string>({
			query: (userId) => `board?userId=${userId}`,
		}),
		createNewGame: build.mutation<BoardDto, BoardCreateNewGameDto>({
			query: (board) => ({
				url: `board/newgame`,
				method: 'POST',
				body: board,
				invalidatesTags: ['board'],
			}),
		}),
	}),
});

export const { useGetBoardsQuery, useCreateNewGameMutation } = boardApi;
