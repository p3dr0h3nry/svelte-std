<script context="module">
    export async function load({session}){
		console.log('request auth',session);
		if(session.authenticated){
			return{
                status:302,
                redirect:'/home'
            }
		}else{
			return{
                status:302,
                redirect:'/auth'
            }
		}
    }
</script>
<script>
	import { Router, Route } from 'svelte-routing';
	import Auth from './auth.svelte';
	import Home from './home.svelte';
	import About from './about.svelte';
	import PrivateRoute from './PrivateRoute.svelte';
	import { user } from '../store/auth';
	import { goto } from '$app/navigation';

	export let authenticated;
	// console.log('passa pela index', authenticated);

	
	// if(!authenticated){
	// 	redirect();
	// }
	// function redirect (){
	// 	window.location.replace('/auth');
	// }
</script>

<!-- <svelte:head>
    <title>
        Request Orders - Protobuf
    </title>
</svelte:head> -->
<Router>
	<main>
			<Route path="/auth" component={Auth} />
			<Route path="/home" component={Home} />
			<Route path="/about" component={Home} />
		
	</main>
</Router>
