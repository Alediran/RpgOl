import { z } from 'zod';
import Localize from '../../components/localize';
import errorMap from '../error.map';

z.setErrorMap(errorMap);

export const validationSchema = z
	.object({
		userName: z.string().min(8, { message: Localize['Validation:UserName'] }),
		/*.refine(async (val) => (await UserExists(val)).data === false, {
				message: Localize['Validation:UserExists'],
			})*/ email: z.string().email({ message: Localize['Validation:InvalidEmail'] }),
		password: z.string().min(1, { message: Localize['Validation:Required'] }),
		confirm: z.string().min(1, { message: Localize['Validation:Required'] }),
		birthday: z
			.date()
			.optional()
			.refine((data) => data !== undefined, {
				message: Localize['Validation:UndefinedDate'],
			}),
		accept: z.boolean(), //.refine((data) => !data, { message: '' }),
	})
	.refine((data) => data.password === data.confirm, {
		message: Localize['Validation:PassswordsNotMatching'],
		path: ['confirm'],
	});

type UserCreateDto = z.infer<typeof validationSchema>;

export default UserCreateDto;
