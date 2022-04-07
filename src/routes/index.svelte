<script context="module">
    export async function load({session}){
		console.log('sessao index',session)
        return { props:{authenticated:session.authenticated}}
    }
</script>
<script>
	import { Router, Route } from 'svelte-routing';
	import Auth from './auth.svelte';
	import Home from './home.svelte';
	import PrivateRoute from './PrivateRoute.svelte';
	import { user } from '../store/auth';
	import { goto } from '$app/navigation';

	export let authenticated;
	console.log('passa pela index');
	console.log('esta autenticado index',authenticated);
	
	if(!authenticated){
		goto('/auth');
	}
</script>

<!-- <svelte:head>
    <title>
        Request Orders - Protobuf
    </title>
</svelte:head> -->
<Router>
	<main>
		{#if !authenticated}
		<Route path="/" component={Auth} {user} />
		{:else}
		<!-- <Route path="/" component={Auth} {user} /> -->
			<!-- <Auth />
		</Route> -->
		<Route path="home" component={Home} {user}/>
		{/if}
			<!-- <Home />
		</Route> -->
		
	</main>
</Router>
