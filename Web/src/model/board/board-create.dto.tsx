import { z } from 'zod';
import Localize from '../../components/localize';
import Categories from '../enums/categories';
import Systems from '../enums/systems';
import errorMap from '../error.map';

z.setErrorMap(errorMap);

export const validationSchema = z.object({
	name: z.string().min(8, { message: 'Placeholder' }),
	gmAlias: z.string().min(1, { message: 'Placeholder' }),
	categories: z
		.nativeEnum(Categories)
		.array()
		.nonempty({ message: 'Placeholder' }),
	system: z.nativeEnum(Systems),
});

type BoardCreateNewGameDto = z.infer<typeof validationSchema>;

export default BoardCreateNewGameDto;
