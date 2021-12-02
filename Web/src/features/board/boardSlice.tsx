import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export enum BoardStatus {
	idle,
	loading,
}

export interface BoardState {
	status: BoardStatus;
	error?: string;
}

const initialState: BoardState = {
	status: BoardStatus.idle,
};

export const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export const selectBoard = (state: RootState) => state.board;
export default boardSlice.reducer;
