import axios from 'axios';
import UserDto from '../model/user.dto';

export default class UserService {
	apiUrl = 'https://localhost:5001';

	CreateUser = async (user: UserDto) => {
		const result = await axios.post<UserDto>(`${this.apiUrl}/api/user`, user);

		return result;
	};

	ValidateUser = async (userName: string, password: string) => {
		const result = await axios.get<UserDto>(
			`${this.apiUrl}/api/user?userName=${userName}&password=${password}`
		);

		return result;
	};
}
