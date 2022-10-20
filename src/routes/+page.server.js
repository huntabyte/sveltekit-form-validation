import { z } from 'zod';

const registerSchema = z
	.object({
		name: z
			.string({ required_error: 'Name is requird' })
			.min(1, { message: 'Name is required' })
			.max(64, { message: 'Name must be less than 64 characters' })
			.trim(),
		email: z
			.string({ required_error: 'Email is required' })
			.min(1, { message: 'Email is required' })
			.max(64, { message: 'Email must be less than 64 characters' })
			.email({ message: 'Invalid email address' }),
		password: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters' })
			.trim(),
		passwordConfirm: z
			.string({ message: 'Password Confirm is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters' })
			.trim(),
		terms: z.enum(['accept'], { required_error: 'You must accept the terms and conditions' })
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				message: 'Confirm Password and Password must match',
				path: ['passwordConfirm']
			});
		}
	});

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		console.log('Form Data:', formData);

		try {
			const result = registerSchema.parse(formData);
			console.log('SUCCESS:');
			console.log(result);
		} catch (err) {
			const { fieldErrors: errors } = err.flatten();
			console.log(errors);
			const { password, passwordConfirm, ...rest } = formData;
			return {
				data: rest,
				errors
			};
		}
	}
};
