import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import BoardCreateNewGameDto from '../../model/validation/board-create.validation';
import BoardService from '../../services/board.service';

const boardService = new BoardService();

export enum BoardStatus {
	idle,
	loading,
}

type FetchError = {
	message: string;
};

export interface BoardState {
	status: BoardStatus;
	error?: string;
}

const initialState: BoardState = {
	status: BoardStatus.idle,
};

/*export const getBoards = createAsyncThunk<
	Board[],
	string,
	{ rejectValue: FetchError }
>('board/get', async (userId: string, thunkApi) => {
	const result = await boardService.GetBoards(userId);

	if (result.status !== 200)
		return thunkApi.rejectWithValue({
			message: 'Error retrieving boards',
		});

	return result.data;
});

export const createNewGame = createAsyncThunk<
	Board,
	BoardCreateNewGameDto,
	{ rejectValue: FetchError }
>('board/create', async (board: BoardCreateNewGameDto, thunkApi) => {
	const result = await boardService.CreateNewGame(board);

	if (result.status !== 200)
		return thunkApi.rejectWithValue({
			message: 'Error retrieving boards',
		});

	return result.data;
});*/

export const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		/*builder
			.addCase(getBoards.pending, (state) => {
				state.status = BoardStatus.loading;
			})
			.addCase(getBoards.fulfilled, (state) => {
				state.status = BoardStatus.idle;
			})
			.addCase(getBoards.rejected, (state, { payload }) => {
				state.status = BoardStatus.idle;
				state.error = payload?.message;
			});*/
	},
});

export const selectBoard = (state: RootState) => state.board;
export default boardSlice.reducer;
