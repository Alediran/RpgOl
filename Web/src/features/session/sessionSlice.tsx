import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import UserType from '../../model/static/user-type';
import UserDto from '../../model/user/user.dto';

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

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		userValidated(state, action: PayloadAction<UserDto>) {
			const { payload } = action;
			state.status = Status.logged;
			state.isLogged = true;
			state.user = payload;
		},
	},
	extraReducers: (builder) => {},
});

export const { userValidated } = sessionSlice.actions;
export const selectSession = (state: RootState) => state.session;

export default sessionSlice.reducer;
