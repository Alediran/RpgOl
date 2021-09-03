import { z } from 'zod';
import Localize from '../../components/localize';
import UserService from '../../services/user.service';
import errorMap from '../error.map';

//z.setErrorMap(errorMap);

const userService = new UserService();

export const validationSchema = z
	.object({
		User: z
			.string()
			.min(8, { message: Localize['Validation:UserName'] })
			.refine(
				async (val) => (await userService.UserExists(val)).data === false,
				{
					message: Localize['Validation:UserExists'],
				}
			),
		Email: z.string().email({ message: Localize['Validation:InvalidEmail'] }),
		Password: z.string().min(1, { message: Localize['Validation:Required'] }),
		confirm: z.string().min(1, { message: Localize['Validation:Required'] }),
		Birthday: z
			.date()
			.optional()
			.refine((data) => data !== undefined, {
				message: Localize['Validation:UndefinedDate'],
			}),
		Accept: z.boolean(), //.refine((data) => !data, { message: '' }),
	})
	.refine((data) => data.Password === data.confirm, {
		message: Localize['Validation:PassswordsNotMatching'],
		path: ['confirm'],
	});

type UserCreateDto = z.infer<typeof validationSchema>;

export default UserCreateDto;
