<script>
	import { Route } from 'svelte-routing';
	import Authguard from '../store/Authguard.svelte';
</script>

<Route>
	<Authguard>
		<slot />
	</Authguard>
</Route>
