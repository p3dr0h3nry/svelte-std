<script>
	export let name;
	function redirect(local) {
		window.location.replace(local);
	}
</script>

<nav class="navBar">
	<div class="menu">
		<button class="menuButton" on:click|preventDefault={() => window.location.replace('/home')}>Orders</button>
		<button class="menuButton" on:click|preventDefault={() => redirect('/insertProducts')}>Insert Products</button>
	</div>

	<div class="navUser">
		Welcome, {name}
		<form method="get" action="/auth/sign-out" >
			<button class="menuButton" style="margin-left: 20px;" type="submit" >Log Out</button>
		</form>
	</div>
</nav>
