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
	// import * as SchemaPrd from "../assets/protos/products_pb";
	import * as SchemaOrder from '../assets/protos/orders_pb';
	
	// const { } = SchemaOrder.default;

	// const products = new Schema.proto();


    const { Product, Products, Order, Orders } = SchemaOrder.default;
	const products = new Products();

	const prd1 = new Product();
	prd1.setId(100);
	prd1.setDesc('Produto teste 1');
	prd1.setQtd(10);
	prd1.setValue(15.95);

	const prd2 = new Product();
	prd2.setId(101);
	prd2.setDesc('Produto teste 2');
	prd2.setQtd(5);
	prd2.setValue(8.15);

	products.addProduct(prd1);
	let list = products.getProductList();
	console.log('list 1', list);

	products.addProduct(prd2);
	list = products.getProductList();
	console.log('list 2', list);

	let total = 0;
	list.map((v, i) => {
		total += v.getValue();
		return total;
	});

	const order = new Order();
	order.setTotal(total);
	order.setId(1);
	order.setDesc('pedido 1');

	const orders = new Orders();
	orders.addOrder(order);

	console.log(orders.getOrderList());
</script>

<h1>Products</h1>
