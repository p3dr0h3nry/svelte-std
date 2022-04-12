<script>
	export let name;

	function redirect(local) {
		window.location.replace(local);
	}
</script>

<nav class="navBar">
	<div class="menu">
		<button on:click|preventDefault={() => window.location.replace('/home')}>Orders</button>
		<button on:click|preventDefault={() => redirect('/insertProducts')}>Insert Products</button>
	</div>

	<div class="navUser">
		Welcome, {name}
	</div>
</nav>
