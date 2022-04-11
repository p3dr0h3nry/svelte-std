<script>
	import * as SchemaOrder from '../assets/protos/orders_pb';
	const { Product, Products, Order, Orders } = SchemaOrder.default;
	const products = new Products();
	let list = products.getProductList();
</script>

<h1>Orders</h1>
{list}
