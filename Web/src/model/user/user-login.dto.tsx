import { z } from 'zod';
import Localize from '../../components/localize';
import errorMap from '../error.map';
z.setErrorMap(errorMap);

export const validationSchema = z.object({
	userName: z.string().min(8, { message: Localize['Validation:UserName'] }),
	password: z.string(),
	persist: z.boolean(),
});

type UserLoginDto = z.infer<typeof validationSchema>;

export default UserLoginDto;
