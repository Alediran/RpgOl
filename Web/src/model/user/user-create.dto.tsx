type UserCreateDto = {
	Birthday?: Date | undefined;
    Password: string;
    Email: string;
    Name: string;
    confirm: string;
    Accept: boolean;
};

export default UserCreateDto;
