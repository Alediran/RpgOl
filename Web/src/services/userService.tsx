import { baseApi } from './baseApi';
import UserCreateDto from '../model/user/user-create.dto';
import UserDto from '../model/user/user.dto';

export const userApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		validateUser: build.query<UserDto, { userName: string; password: string }>({
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
