import { baseSliceApi } from './baseSliceApi';
import UserCreateDto from '../model/user/user-create.dto';
import UserDto from '../model/user/user.dto';
import UserLoginDto from '../model/user/user-login.dto';

export const userApi = baseSliceApi.injectEndpoints({
	endpoints: (build) => ({
		validateUser: build.query<UserDto, UserLoginDto>({
			query: (user) =>
				`user?userName=${user.userName}&password=${user.password}`,
		}),
		createUser: build.mutation<UserCreateDto, UserCreateDto>({
			query: (user) => ({
				url: `user`,
				method: 'POST',
				body: user,
				invalidatesTags: ['user'],
			}),
		}),
	}),
	overrideExisting: false,
});

export const { useValidateUserQuery, useCreateUserMutation } = userApi;
