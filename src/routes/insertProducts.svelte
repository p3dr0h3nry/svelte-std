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
    
    import * as SchemaOrder from '../assets/protos/orders_pb';
    
    const { Product, Products, Order, Orders } = SchemaOrder.default;
	let id,descr,stock,value;
	const products = new Products();

	

    const listProducts = products.getProductList();

	async function createProduct(){
		const prd1 = new Product();
		prd1.setId(100);
		prd1.setDesc('Produto teste 1');
		prd1.setQtd(10);
		prd1.setValue(15.95);
	}

    async function insertProduct(){
        const res = await fetch('/fs/fs', {
			method: 'POST',
			body: JSON.stringify({
				listProducts,
				local:'orders'
			}),
			headers: {
				'Content-type': 'application/json'
			}
		});
    }

</script>

<h1>Products</h1>

<div class="class-form">
	<input
		class="inputForm"
		type="number"
		id="id"
		bind:value={id}
		placeholder="Enter the product code"
	/>
</div>
<div class="class-form">
	<input
		class="inputForm"
		type="text"
		bind:value={descr}
		placeholder="Enter the description"
	/>
</div>

<div class="class-form">
	<input
		class="inputForm"
		type="number"
		bind:value={stock}
		placeholder="Enter the amount of stock"
	/>
</div>

<div class="class-form">
	<input
		class="inputForm"
		type="number"
		bind:value={value}
		placeholder="Enter the value of product"
	/>
</div>

<button on:click={insertProduct}>Insert New Product</button>
