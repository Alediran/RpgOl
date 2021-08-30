import { z } from 'zod';
import Localize from '../../components/localize';
import UserService from '../../services/user.service';
import errorMap from '../error.map';

z.setErrorMap(errorMap);

const userService = new UserService();

export const validationSchema = z
	.object({
		User: z.string().min(8, { message: Localize['Validation:UserName'] }),
		Email: z.string().email({ message: Localize['Validation:InvalidEmail'] }),
		Password: z.string().min(1, { message: Localize['Validation:Required'] }),
		confirm: z.string().min(1, { message: Localize['Validation:Required'] }),
		Birthday: z
			.date()
			.optional()
			.refine((data) => data !== undefined, {
				message: Localize['Validation:UndefinedDate'],
			}),
		Accept: z.boolean().refine((data) => data === true, { message: '' }),
	})
	.refine((data) => data.Password === data.confirm, {
		message: Localize['Validation:PassswordsNotMatching'],
		path: ['confirm'],
	})
	.refine(async (data) => (await userService.UserExists(data.User)).data, {
		message: Localize['Validation:UserExists'],
		path: ['exists'],
	});

type UserCreateDto = z.infer<typeof validationSchema>;

export default UserCreateDto;
