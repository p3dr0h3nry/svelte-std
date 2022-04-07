<script context="module">
    export async function load({session}){
		console.log('sessao home',session);
        if(!session.authenticated){
            return{
                status:302,
                redirect:'/auth'
            }
        }
        return{
            props:{
                user: session.user
            }
        }
    }
</script>
<script>
    export let user;
    console.log(user);
</script>
<h1>Home</h1>
<a href="/about">About </a>
<span>
    {user.session_id}
</span>