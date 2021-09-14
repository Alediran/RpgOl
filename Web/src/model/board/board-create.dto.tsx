import { z } from 'zod';
import Localize from '../../components/localize';
import errorMap from '../error.map';
import { valuedOptionsSchema } from '../static/valuedOptions';

z.setErrorMap(errorMap);

export const validationSchema = z.object({
	Title: z.string().min(8, { message: 'Placeholder' }),
	GmAlias: z.string().min(1, { message: 'Placeholder' }),
	Categories: z.array(valuedOptionsSchema),
	System: z.object(valuedOptionsSchema.shape),
});

type BoardCreateNewGameDto = z.infer<typeof validationSchema>;

export default BoardCreateNewGameDto;
