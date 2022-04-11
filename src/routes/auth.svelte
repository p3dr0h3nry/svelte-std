<script context="module">
	export async function load({ session }) {
		if (session.authenticated) {
			return {
				status: 302,
				redirect: '/home'
			};
		} else {
			return {};
		}
	}
</script>

<script>
	import '../assets/css/login.scss';

	let username;
	let password;
	let error;

	const submit = async () => {
		error = undefined;
		if (!username || !password) {
			error = 'Falha';
			return false;
		}
		const res = await fetch('/auth/login', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password
			}),
			headers: {
				'Content-type': 'application/json'
			}
		});
		if (res.ok) {
			console.log(res.headers);
			window.location.replace('/home');
		} else {
			console.log(res);
			error = res.statusText;
		}
	};
</script>

<div class="authContent">
	<div class="authBox">
		<div class="titleDiv">
			<h1>Please Sign In</h1>
		</div>
		<hr />
		<form on:submit|preventDefault={submit}>
			<div class="loginForm">
				<div class="class-form">
					<input
						class="inputForm"
						type="text"
						id="username"
						bind:value={username}
						placeholder="Enter your username"
					/>
				</div>
				<div class="class-form">
					<input
						class="inputForm"
						type="password"
						bind:value={password}
						placeholder="Enter your password"
					/>
				</div>
			</div>
			<hr />

			<div class="botton-box">
				<button class="btn btn-button btn-success btn-block" type="submit">Signin</button>
			</div>
		</form>
		{#if error}
			<div class="errorDiv">
				<p>{error}</p>
			</div>
		{/if}
	</div>
</div>
