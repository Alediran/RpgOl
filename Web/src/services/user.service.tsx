import axios from 'axios';
import UserCreateDto from '../model/user/user-create.dto';
import UserDto from '../model/user/user.dto';

export default class UserService {
	apiUrl = process.env.REACT_APP_API_URL;

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
