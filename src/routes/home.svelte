<script context="module">
	export async function load({ session }) {
		// console.log('sessao home', session);
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
	export let user;
	console.log(user);
	import * as SchemaOrder from '../assets/protos/orders_pb';
	const { Product, Products, Order, Orders } = SchemaOrder.default;

	const products = new Products();
	let list = products.getProductList();
	console.log('listagem',list);
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
