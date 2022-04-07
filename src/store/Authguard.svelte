<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import {user} from './auth.js';

    const navigate = useNavigate();
    const location = useLocation();
    console.log('authguard')
    $: if (!$user){
        navigate("/auth",{
            state: { from: $location.pathname},
            replace: true,
        });
    }

</script>

{#if $user}
    <slot />
{/if}