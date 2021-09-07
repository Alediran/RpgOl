import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import UserType from '../../model/enums/user-type';
import UserLoginDto from '../../model/user/user-login.dto';
import UserDto from '../../model/user/user.dto';
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
	user: UserDto;
	error?: string;
}

const initialState: SessionState = {
	status: Status.idle,
	isLogged: false,
	user: {
		id: '',
		userName: '',
		email: '',
		birthday: new Date(),
		persist: false,
		userType: UserType.User,
	},
};

type FetchError = {
	message: string;
};

export const logUser = createAsyncThunk<
	UserDto,
	UserLoginDto,
	{ rejectValue: FetchError }
>('user/login', async (user: UserLoginDto, thunkApi) => {
	const result = await userService.ValidateUser(user.userName, user.password);

	if (result.status !== 200)
		return thunkApi.rejectWithValue({
			message: 'Error while login user',
		});

	return { ...result.data, persist: user.persist };
});

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		userReturns(state, action: PayloadAction<UserDto>) {
			const { payload } = action;
			state.status = Status.logged;
			state.isLogged = true;
			state.user = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(logUser.pending, (state) => {
			state.status = Status.logging;
		});

		builder.addCase(logUser.fulfilled, (state, { payload }) => {
			state.status = Status.logged;
			state.user = payload;
			state.isLogged = true;

			console.log('User is ', payload);
			if (payload.persist)
				localStorage.setItem('user', JSON.stringify(payload));
			else sessionStorage.setItem('user', JSON.stringify(payload));
		});

		builder.addCase(logUser.rejected, (state, { payload }) => {
			state.error = payload?.message;
			state.status = Status.idle;
		});
	},
});

export const { userReturns } = sessionSlice.actions;
export const selectSession = (state: RootState) => state.session;

export default sessionSlice.reducer;
