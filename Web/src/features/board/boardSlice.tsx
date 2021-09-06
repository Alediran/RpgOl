import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import BoardDto from '../../model/board/board.dto';
import BoardService from '../../services/board.service';

const boarService = new BoardService();

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

export const getBoards = createAsyncThunk<
	BoardDto[],
	string,
	{ rejectValue: FetchError }
>('board/get', async (userId: string, thunkApi) => {
	const result = await boarService.GetBoards(userId);

	if (result.status !== 200)
		return thunkApi.rejectWithValue({
			message: 'Error retrieving boards',
		});

	return result.data;
});

export const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getBoards.pending, (state) => {
				state.status = BoardStatus.loading;
			})
			.addCase(getBoards.fulfilled, (state) => {
				state.status = BoardStatus.idle;
			})
			.addCase(getBoards.rejected, (state, { payload }) => {
				state.status = BoardStatus.idle;
				state.error = payload?.message;
			});
	},
});

export const selectBoard = (state: RootState) => state.board;
export default boardSlice.reducer;
