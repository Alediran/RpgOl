import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, ValidateUserQuery } from '../../api/generated-types';
import { RootState } from '../../app/store';

enum Status {
	idle,
	logging,
	logged,
}
export interface SessionState {
	status: Status;
	isLogged: boolean;
	error?: string;
	user: ValidateUserQuery;
}

const initialState: SessionState = {
	status: Status.idle,
	isLogged: false,
	user: {
		validateUser: {
			id: '',
			userName: '',
			birthday: '',
			email: '',
			userType: 0,
		},
	},
};

type FetchError = {
	message: string;
};

/*export const logUser = createAsyncThunk<
	User,
	UserLoginDto,
	{ rejectValue: FetchError }
>('user/login', async (user: UserLoginDto, thunkApi) => {
	const result = await ValidateUser(user.userName, user.password);

	if (result.status !== 200)
		return thunkApi.rejectWithValue({
			message: 'Error while login user',
		});

	return { ...result.data, persist: user.persist };
});*/

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		userLogged(state, action: PayloadAction<ValidateUserQuery>) {
			const { payload } = action;
			state.status = Status.logged;
			state.isLogged = true;
			state.user = payload;
		},
	},
	extraReducers: (builder) => {
		/*builder.addCase(logUser.pending, (state) => {
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
		});*/
	},
});

export const { userLogged } = sessionSlice.actions;
export const selectSession = (state: RootState) => state.session;

export default sessionSlice.reducer;
