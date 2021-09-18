import { z } from 'zod';

export const valuedOptionsSchema = z.object({
	value: z.string().or(z.number()),
	description: z.string(),
});

type ValuedOptions = z.infer<typeof valuedOptionsSchema>;
export default ValuedOptions;
