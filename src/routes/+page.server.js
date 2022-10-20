export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		console.log(formData);
	}
};
