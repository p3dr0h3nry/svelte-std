<script context="module">
	export async function load({ session }) {
		if (!session.authenticated) {
			return {
				status: 302,
				redirect: '/auth'
			};
		}
		return {
			props: {
				user: session.user
			}
		};
	}
</script>

<script>
</script>

<div class="content">
	<div class="page-title">
		<h1>Orders</h1>
	</div>
	<div class="flex">
		<div class="content-orders">List</div>
		<div class="content-details">Details</div>
	</div>
</div>
