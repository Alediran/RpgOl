import UserType from '../enums/user-type';

type UserDto = {
	id: string;
	userName: string;
	email: string;
	birthday: Date;
	persist: boolean;
	userType: UserType;
};

export default UserDto;
