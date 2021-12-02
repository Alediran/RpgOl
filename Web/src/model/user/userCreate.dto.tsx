import { z } from 'zod';
import { toZod } from 'tozod';

interface IUserCreateDto {
	User: string;
	Email: string;
	Password: string;
	Birthday: Date;
}

export const UserCreateDto: toZod<IUserCreateDto> = z.object({
	User: z.string(),
	Email: z.string(),
	Password: z.string(),
	Birthday: z.date(),
});
