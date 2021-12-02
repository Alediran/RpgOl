import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export enum UserStatus {
	idle,
	loading,
	saving,
	error,
}

export interface UserState {
	status: UserStatus;
	error?: string;
}

const initialState: UserState = {
	status: UserStatus.idle,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

//export const { sessionApproved } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
