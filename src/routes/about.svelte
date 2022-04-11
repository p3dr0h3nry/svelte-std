<script context="module">
	export async function load({ session }) {
		console.log('sessao home', session);
		if (!session.authenticated) {
			return {
				status: 302,
				redirect: '/auth'
			};
		} else {
			return {};
		}
	}
</script>

<script>
</script>

<h1>About</h1>
<a href="/home">Home</a>
