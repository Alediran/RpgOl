import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ValidateUserQuery } from '../../api/generated-types';
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
	extraReducers: (builder) => {},
});

export const { userLogged } = sessionSlice.actions;
export const selectSession = (state: RootState) => state.session;

export default sessionSlice.reducer;
