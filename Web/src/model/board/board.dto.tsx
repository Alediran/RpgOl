import UserDto from '../user/user.dto';

type BoardDto = {
	id: string;
	Title: string;
	Owner: UserDto;
	IsDeleted: boolean;
	IsGeneral: boolean;
};

export default BoardDto;
