<script context="module">
    export async function load({session}){
		console.log('sessao auth',session)
        return { props:{authenticated:session.authenticated}}
    }
</script>
<script>
	// import { Router, Route, Link } from 'svelte-navigator';
	import * as cookie from 'cookie';
	import '../assets/css/login.scss';
	import { createEventDispatcher } from 'svelte';
	import { user } from '../store/auth';
	import { get_current_component } from 'svelte/internal';

	const dispatch = createEventDispatcher();
	const component = get_current_component();

	let username;
	let password;
	let error;

	console.log('chamou auth');

	export let authenticated;
	console.log('esta autenticado auth',authenticated);
	if(authenticated){
		window.location.replace('/home');
	}
	const submit = async () => {
		error= undefined;
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
			// const data = await res.json();
			// user.set({...data});
			// console.log($user,data);
			// dispatch('success',{text:'teste'});
			window.location.replace('/home');
			// goto("/home");
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
