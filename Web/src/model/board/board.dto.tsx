import UserSessionDto from '../user/user-session.dto';

type BoardDto = {
	id: string;
	Title: string;
	Owner: UserSessionDto;
	IsDeleted: boolean;
	IsGeneral: boolean;
};

export default BoardDto;
