import { z } from 'zod';
import Localize from '../../components/localize';
import errorMap from '../error.map';
import { userApi } from '../../services/userService';

z.setErrorMap(errorMap);

const userExists = async (user: string) => {
	const result = userApi.endpoints.userExists.initiate(user);

	return false;
};

export const validationSchema = z
	.object({
		User: z
			.string()
			.min(8, { message: Localize['Validation:UserName'] })
			.refine(async (val) => (await userExists(val)) === false, {
				message: Localize['Validation:UserExists'],
			}),
		Email: z.string().email({ message: Localize['Validation:InvalidEmail'] }),
		Password: z.string().min(1, { message: Localize['Validation:Required'] }),
		confirm: z.string().min(1, { message: Localize['Validation:Required'] }),
		Birthday: z
			.date()
			.optional()
			.refine((data) => data !== undefined, {
				message: Localize['Validation:UndefinedDate'],
			}),
		Accept: z.boolean().refine((data) => !data, { message: '' }),
	})
	.refine((data) => data.Password === data.confirm, {
		message: Localize['Validation:PassswordsNotMatching'],
		path: ['confirm'],
	});

type UserCreateDto = z.infer<typeof validationSchema>;

export default UserCreateDto;
