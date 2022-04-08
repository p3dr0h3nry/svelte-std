<script context="module">
    export async function load({session}){
		// console.log('request auth',session);
            if(!session.authenticated){
                return{
                    status:302,
                    redirect:'/auth'
                }
            }
			return{
                props:{
                    authenticated:session.authenticated,
                    name: session.user.name
                }
            }
    }
</script>
<script>    
    import Nav from  '../components/nav.svelte'
    import '../assets/css/global.scss';
    export let authenticated;
    export let name;
    // console.log('layout ',authenticated, 'nome ',name);
</script>
{#if authenticated}
    <Nav {name} />
{/if}
<slot />