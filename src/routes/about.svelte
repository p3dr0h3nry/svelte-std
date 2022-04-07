<script context="module">
    export async function load({session}){
        console.log('sessao about',session)
        if(!session.authenticated){
            return {
                status: 302,
                redirect: '/auth'
            }
        }else{
            return {
                props:{
                    sessao: session.sessao
                }
            }
        }
    }
</script>
<h1>About</h1>
<a href="/home">Home</a>