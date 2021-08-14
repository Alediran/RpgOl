import { z } from 'zod';
import Localize from '../components/localize';
import errorMap from './error.map';

z.setErrorMap(errorMap);

export const validationSchema = z
	.object({
		id: z.string().optional(),
		userName: z.string().min(8, { message: Localize['Validation:UserName'] }),
		email: z.string().email({ message: Localize['Validation:InvalidEmail'] }),
		password: z.string(),
		confirm: z.string(),
		birthday: z.date(),
		accept: z.boolean().refine((data) => data === true),
	})
	.refine((data) => data.password === data.confirm, {
		message: Localize['Validation:PassswordsNotMatching'],
		path: ['confirm'],
	});

type UserDto = z.infer<typeof validationSchema>;

export default UserDto;
