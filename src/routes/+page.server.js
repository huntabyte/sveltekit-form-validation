import { z } from 'zod';

export const registerSchema = z.object({
	name: z.string().min(2, { message: 'Name is required' }).max(64).trim(),
	email: z
		.string({ required_error: 'Email is required' })
		.min(1, { message: 'Email is required' })
		.max(64, { message: 'Email must be less than 64 characters' })
		.email({ message: 'Invalid email address' })
		.trim(),
	password: z
		.string({ required_error: 'Password is required' })
		.min(10, { message: 'Password must be at least 10 characters' })
		.max(32, { message: 'Password must be less than 32 characters' })
		.trim(),
	passwordConfirm: z
		.string({ required_error: 'Confirm Password is required' })
		.min(10, { message: 'Password must be at least 10 characters' })
		.max(32, { message: 'Password must be less than 32 characters' })
		.trim()
});

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		try {
			const result = registerSchema.parse(formData);
		} catch (err) {
			const { fieldErrors } = err.flatten();
			console.log(fieldErrors);
		}
	}
};
