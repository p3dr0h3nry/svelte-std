
<script context="module">
    export async function load({session}){
            if(!session.authenticated){
                return{
                    status:302,
                    redirect:'/auth'
                }
            }
			return{}
    }
</script>

<h1>About</h1>
<a href="/home">Home</a>
