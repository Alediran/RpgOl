import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import UserDto from '../../model/user.dto';
import UserService from '../../services/user.service';

const userService: UserService = new UserService();

enum Status {
	idle,
	loading,
	saving,
}

type FetchError = {
	message: string;
};

export interface UserState {
	status: Status;
	error?: string;
}

const initialState: UserState = {
	status: Status.idle,
	error: '',
};

export const createUser = createAsyncThunk<
	UserDto,
	UserDto,
	{ rejectValue: FetchError }
>('user/create', async (user: UserDto, thunkApi) => {
	const result = await userService.CreateUser(user);

	if (result.status !== 200)
		return thunkApi.rejectWithValue({
			message: 'Error while saving user',
		});

	return result.data;
});

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(createUser.pending, (state) => {
			state.status = Status.saving;
		});

		builder.addCase(createUser.fulfilled, (state) => {
			state.status = Status.idle;
		});

		builder.addCase(createUser.rejected, (state, { payload }) => {
			state.error = payload?.message;
			state.status = Status.idle;
		});
	},
});

//export const { sessionApproved } = userSlice.actions;
export const selectSession = (state: RootState) => state.session;

export default userSlice.reducer;
