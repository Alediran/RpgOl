export enum UserType {
	Administrator,
	Moderator,
	User,
}

type UserSessionDto = {
	id: string;
	userName: string;
	email: string;
	birthday: Date;
	persist: boolean;
	userType: UserType;
};

export default UserSessionDto;
