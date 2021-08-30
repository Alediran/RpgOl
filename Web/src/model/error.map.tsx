import { z } from 'zod';
import Localize from '../components/localize';

const errorMap: z.ZodErrorMap = (issue, ctx) => {
	if (issue.code === z.ZodIssueCode.invalid_type) {
		if (issue.expected === 'string') {
			return { message: Localize['Validation:Required'] };
		}
		if (issue.expected === 'date') {
			return { message: Localize['Validation:Required'] };
		}
	}
	if (issue.code === z.ZodIssueCode.custom) {
		return { message: `less-than-${(issue.params || {}).minimum}` };
	}
	return { message: ctx.defaultError };
};

export default errorMap;
