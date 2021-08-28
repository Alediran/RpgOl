import { z } from 'zod';
import Localize from '../../components/localize';
import errorMap from '../error.map';

z.setErrorMap(errorMap);

export const validationSchema = z
	.object({
		User: z.string().min(8, { message: Localize['Validation:UserName'] }),
		Email: z.string().email({ message: Localize['Validation:InvalidEmail'] }),
		Password: z.string(),
		Birthday: z.date(),
		confirm: z.string(),
		accept: z.boolean().refine((data) => data === true),
	})
	.refine((data) => data.Password === data.confirm, {
		message: Localize['Validation:PassswordsNotMatching'],
		path: ['confirm'],
	});

type UserCreateDto = z.infer<typeof validationSchema>;

export default UserCreateDto;
