<script context="module">
    export async function load({session}){
		console.log('sessao',session)
        return { props:{authenticated:session.authenticated}}
    }
</script>
<script>
    
    // import * as cookie from 'cookie';
    // const cookies = cookie.parse(headers.cookie || '');
    export let authenticated;
    if(!authenticated){
        window.location.replace('/auth');
    }
// import { onMount } from "svelte";
    console.log('checou na home');

    // export let sessao

    // onMount(async()=>{

    // });
</script>
<h1>Home</h1>
<a href="/about">About</a>