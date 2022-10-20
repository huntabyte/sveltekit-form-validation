<script>
	export let form;
</script>

<div class="lg:container mx-auto h-full w-full p-8">
	<form method="POST" class="flex flex-col items-center w-full justify-center">
		<h1 class="text-3xl font-medium text-center my-2">Register</h1>
		<div class="form-control w-full max-w-xs">
			<label for="name" class="label">
				<span class="label-text">Name</span>
			</label>
			<input
				type="text"
				name="name"
				class="input w-full max-w-xs {form?.errors?.name ? 'input-error' : 'input-bordered'}"
				value={form?.data?.name ?? ''}
			/>
			<label for="name" class="label">
				{#if form?.errors?.name}
					<span class="label-text-alt text-error">{form?.errors?.name[0]}</span>
				{/if}
			</label>
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="email" class="label">
				<span class="label-text">Email</span>
			</label>
			<input
				type="email"
				name="email"
				class="input w-full max-w-xs {form?.errors?.email ? 'input-error' : 'input-bordered'}"
				value={form?.data?.email ?? ''}
			/>
			<label for="email" class="label">
				{#if form?.errors?.email}
					<span class="label-text-alt text-error">{form?.errors?.email[0]}</span>
				{/if}
			</label>
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="password" class="label">
				<span class="label-text">Password</span>
			</label>
			<input
				type="password"
				name="password"
				class="input w-full max-w-xs {form?.errors?.password ? 'input-error' : 'input-bordered'}"
			/>
			<label for="password" class="label">
				{#if form?.errors?.password}
					<span class="label-text-alt text-error">{form?.errors?.password[0]}</span>
				{/if}
			</label>
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="passwordConfirm" class="label">
				<span class="label-text">Confirm Password</span>
			</label>
			<input
				type="password"
				name="passwordConfirm"
				class="input w-full max-w-xs {form?.errors?.passwordConfirm
					? 'input-error'
					: 'input-bordered'}"
			/>
			<label for="passwordConfirm" class="label">
				{#if form?.errors?.passwordConfirm}
					<span class="label-text-alt text-error">{form?.errors?.passwordConfirm[0]}</span>
				{/if}
			</label>
		</div>
		<div class="form-control w-full max-w-xs pb-2">
			<label class="label cursor-pointer justify-start space-x-4">
				<input
					type="checkbox"
					name="terms"
					class="checkbox checkbox-primary {form?.errors?.terms ? 'border-error' : ''}"
				/>
				<span class="label-text">I accept the terms and conditions</span>
			</label>
			<label for="terms" class="label">
				{#if form?.errors?.terms}
					<span class="label-text-alt text-error">{form?.errors?.terms[0]}</span>
				{/if}
			</label>
		</div>
		<div class="w-full max-w-xs">
			<button class="btn btn-primary w-full" type="submit">Register</button>
		</div>
	</form>
</div>
