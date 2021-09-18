import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import UserDto from '../../model/validation/user-create.validation';
import UserService from '../../services/user.service';

const userService: UserService = new UserService();

export enum UserStatus {
	idle,
	loading,
	saving,
	error,
}

type FetchError = {
	message: string;
};

export interface UserState {
	status: UserStatus;
	error?: string;
}

const initialState: UserState = {
	status: UserStatus.idle,
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
			state.status = UserStatus.saving;
		});

		builder.addCase(createUser.fulfilled, (state) => {
			state.status = UserStatus.idle;
		});

		builder.addCase(createUser.rejected, (state, { payload }) => {
			state.error = payload?.message;
			state.status = UserStatus.error;
		});
	},
});

//export const { sessionApproved } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
