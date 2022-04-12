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
	import jquery from 'jquery';
	const { Product, Products } = SchemaOrder.default;
	let id, descr, stock, value, err, success;
	let listNewProducts = [];
	const products = new Products();

	async function createProduct() {
		const listProducts = products.getProductList();
		let validId = listProducts.map((value, index) => {
			console.log(value.getId());
			if (value.getId() == id) {
				err = 'This ID alredy exist';
				return false;
			} else {
				return true;
			}
		});
		const invalid = validId.find((v) => v == false);
		if (invalid == false) {
			jquery('#id').addClass('alert');
			return {};
		}
		jquery('#id').removeClass('alert');
		err = '';
		const prd1 = new Product();
		prd1.setId(id);
		prd1.setDesc(descr);
		prd1.setQtd(stock);
		prd1.setValue(value);
		products.addProduct(prd1);
		listNewProducts = products.getProductList();

		id='';
		descr='';
		stock='';
		value='';
	}

	async function sendProducts() {
		const productsBinary = products.serializeBinary();
		const res = await fetch('/fs/fs', {
			method: 'POST',
			body: productsBinary,
			headers: {
				'Content-type': 'application/json'
			}
		});
		if (res.statusText == 'OK') {
			success = 'Success';
			products.clearProductList();
			listNewProducts = [];
		} else {
			err = 'Process Fail';
		}
	}
</script>

<div class="content">
	<h1>Products</h1>
	<div class="flex">
		<div class="content-orders">
			{#if err}
				<div class="errorMsg">
					{err}
				</div>
			{/if}
			{#if success}
				<div class="successDiv">
					{success}
				</div>
			{/if}
			<h2>New Product</h2>
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
					bind:value
					placeholder="Enter the value of product"
				/>
			</div>

			<button class="btn btn-success btn-250" on:click={createProduct}>Insert</button>
			<button class="btn btn-warning btn-250" on:click={sendProducts}>Send</button>
		</div>
		{#if listNewProducts.length > 0}
			<div class="content-orders">
				<h2>Product List</h2>
				<div class="flex-space">
					{#each listNewProducts as nP, i}
						<div class="itens">
							<p>Code: {nP.getId()}</p>
							<p>Description: {nP.getDesc()}</p>
							<p>Stock: {nP.getQtd()}</p>
							<p>Value: {nP.getValue()}</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
