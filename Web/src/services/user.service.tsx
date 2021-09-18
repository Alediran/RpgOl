import axios from 'axios';
import { gql, useQuery } from '@apollo/react-hooks';
import UserCreateDto from '../model/validation/user-create.validation';
import UserDto from '../model/user/user.dto';

export default class UserService {
	apiUrl = process.env.REACT_APP_API_URL;

	GET_USER = gql`
		{
			users {
				userName
				userType
			}
		}
	`;

	GetUsers = async () => {
		const { data, error, loading } = useQuery(this.GET_USER);

		if (loading) {
			if (error) {
			}
		} else {
			return data;
		}
	};

	CreateUser = async (user: UserCreateDto) => {
		const result = await axios.post<UserCreateDto>(
			`${this.apiUrl}/api/user`,
			user
		);

		return result;
	};

	ValidateUser = async (userName: string, password: string) => {
		const result = await axios.get<UserDto>(
			`${this.apiUrl}/api/user?userName=${userName}&password=${password}`
		);

		return result;
	};

	UserExists = async (userName: string) => {
		const result = await axios.get<boolean>(
			`${this.apiUrl}/api/user/exists?userName=${userName}`
		);

		return result;
	};
}
