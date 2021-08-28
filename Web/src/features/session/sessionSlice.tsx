import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import UserLoginDto from '../../model/user/user-login.dto';
import UserSessionDto from '../../model/user/user-session.dto';
import UserService from '../../services/user.service';

const userService: UserService = new UserService();

enum Status {
	idle,
	logging,
	logged,
}
export interface SessionState {
	status: Status;
	isLogged: boolean;
	user: UserSessionDto;
	error?: string;
}

const initialState: SessionState = {
	status: Status.idle,
	isLogged: false,
	user: { id: '', userName: '', email: '', birthday: new Date() },
};

type FetchError = {
	message: string;
};

export const logUser = createAsyncThunk<
	UserSessionDto,
	UserLoginDto,
	{ rejectValue: FetchError }
>('user/login', async (user: UserLoginDto, thunkApi) => {
	const result = await userService.ValidateUser(user.userName, user.password);

	if (result.status !== 200)
		return thunkApi.rejectWithValue({
			message: 'Error while saving user',
		});

	return result.data;
});

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(logUser.pending, (state) => {
			state.status = Status.logging;
		});

		builder.addCase(logUser.fulfilled, (state, { payload }) => {
			state.status = Status.logged;
			state.user = payload;
		});

		builder.addCase(logUser.rejected, (state, { payload }) => {
			state.error = payload?.message;
			state.status = Status.idle;
		});
	},
});

// export const { sessionApproved } = sessionSlice.actions;
export const selectSession = (state: RootState) => state.session;

export default sessionSlice.reducer;
