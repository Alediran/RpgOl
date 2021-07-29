import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface SessionState {
	isLogged: boolean;
	userName: string;
	userId: string;
}

const initialState: SessionState = {
	isLogged: false,
	userName: '',
	userId: '',
};

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		sessionApproved: (
			state,
			action: PayloadAction<{ userName: string; userId: string }>
		) => {
			state.isLogged = true;
			state.userName = action.payload.userName;
			state.userId = action.payload.userId;
		},
	},
	extraReducers: (builder) => {},
});

export const { sessionApproved } = sessionSlice.actions;
export const selectSession = (state: RootState) => state.session;

export default sessionSlice.reducer;
