import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import UserDto from '../../model/user.dto';
import UserService from '../../services/user.service';

const userService: UserService = new UserService();

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

type FetchError = {
	message: string;
};

export const validateUser = createAsyncThunk(
	'user/validate',
	async (user: { userName: string; password: string }) => {
		return await userService.ValidateUser(user.userName, user.password);
	}
);

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
